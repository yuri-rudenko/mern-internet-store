import ApiError from "../error/ApiError.js"
import { Device } from "../models/models.js"

class DeviceController {

    async create(req, res, next) {

        try {
            const {name, price, brandId, typeId, info} = req.body
            const device = await Device.create({name, price, brandId, typeId, info, img:req.newFileName})
            return res.json(device)
        } 
        catch (error) {
            next(ApiError.badRequest(error.message))
        }


    }

    async getAll(req, res) {
       
         

    }

    async getOne(req, res) {
       
         

    }


};

export default new DeviceController()