import {DeviceBrand, TypeBrands, DeviceType} from '../models/models.js';

export default class BrandController{
    static async create(req, res) {
        const {name} = req.body
        const brand = await DeviceBrand.create({name})
        return res.json(brand)
    }
    
    static async getAll(req, res) {
        const brands = await DeviceBrand.findAll()
        return res.json(brands)
    }

    static async getByType(req,res){
        const {typeId} = req.query;
        const brands = await DeviceBrand.findAll({
            include: [{
                model: DeviceType,
                through: { attributes: [] },
                where: { id: typeId },
            }],
        });

        return res.json(brands);
    }
}