import { Device } from "../models/models.js"

class DeviceController {

    async create(req, res) {

        const {name, price, brandId, typeId, info} = req.body
        const {img} = req.files
        const brand = await Device.create({name})
        return res.json(brand)

    }

    async getAll(req, res) {
       
         

    }

    async getOne(req, res) {
       
         

    }


};

export default new DeviceController()