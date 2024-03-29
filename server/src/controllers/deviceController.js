import ApiError from "../error/ApiError.js"
import { Device, DeviceInfo } from "../models/models.js"

class DeviceController {

    async create(req, res, next) {

        try {

            let {name, price, brand, type, info} = req.body;

            const device = await Device.create({name, price, brand, type, img:req.newFileName});

            if(info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        device: device.id
                    })
                });
            }

            return res.json(device);
        } 
        catch (error) {
            return next(ApiError.badRequest(error.message));
        }


    }

    async getAll(req, res, next) {

        let {brandId, typeId, page, limit} = req.query;

        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let query = {};
    
        if (brandId) query.brand = brandId;
        if (typeId) query.type = typeId;
    
        try {
            const count = await Device.countDocuments(query);
            const devices = await Device.find(query).limit(limit).skip(offset);
    
            return res.json({
                count,
                devices
            });
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async getOne(req, res) {
        const { id } = req.params;
    
        try {
            
            const device = await Device.findById(id).populate('deviceInfo');
    
            if (!device) {
                return next(ApiError.badRequest())
            }
    
            const deviceInfo = await DeviceInfo.find({ device: id });

            device.deviceInfo = deviceInfo;
    
            return res.json(device);
        } catch (error) {
            console.error("Error while fetching device:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }


};

export default new DeviceController()