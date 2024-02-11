import ApiError from "../error/ApiError.js";
import bcrypt from 'bcrypt';
import { User, Basket } from "../models/models.js";
import jwt from 'jsonwebtoken';

const generateJWT = (id, email, role) => {

    return jwt.sign(
        {id: id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'},
    );
    
};

class UserController {

    async registration(req, res, next) {

        const {email, password, role} = req.body;
        if(!email || !password) {
            return next(ApiError.badRequest('Wrong email or password'));
        }

        const candidate = await User.findOne({email});

        if(candidate) {
            return next(ApiError.badRequest('User with that email already exists'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generateJWT(user.id, user.email, user.role);

        return res.json({token});
    }

    async login(req, res, next) {
       
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user) {
            return next(ApiError.internal('User with that name wasn\'t found'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);

        if(!comparePassword) {
            return next(ApiError.internal('Wrong password'));
        }

        const token = generateJWT(user.id, user.email, user.role);

        return res.json({token});

    }

    async check(req, res, next) {
        


    }
};

export default new UserController()