import {DeviceBrand} from '../models/models.js';

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
}