import ApiError from "../error/ApiError.js"
import { Device, DeviceInfo } from "../models/models.js"

class DeviceController {

    async create(req, res, next) {

        try {
            let {name, price, brand, type, info} = req.body;

            if(info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        device: i.device
                    })
                });
            }

            const device = await Device.create({name, price, brand, type, img:req.newFileName});
            return res.json(device);
        } 
        catch (error) {
            return next(ApiError.badRequest(error.message));
        }


    }

    async getAll(req, res) {
       
         let {brand, type, page, limit} = req.query;
         page = page || 1;
         limit = limit || 9;
         let offset = page * limit - limit;
         let query = {};

         if(brand) query.brand = brand;
         if(type) query.type = type;

         try {
            const devices = await Device.find(query).limit(limit).skip(offset)

            return res.json(devices);
         } 

         catch (error) {
            return next(ApiError.badRequest(error.message));
         }
         
    }

    async getOne(req, res) {
       
         

    }


};

export default new DeviceController()