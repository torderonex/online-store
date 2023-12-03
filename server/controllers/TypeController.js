import {DeviceType} from '../models/models.js';

export default class TypeController{
    
    static async create(req, res) {
        const {name} = req.body
        const type = await DeviceType.create({name})
        return res.json(type)
    }
    
    static async getAll(req, res) {
        const {id} = req.query;
        let brands;
        if(id){
            brands = await DeviceType.findOne({where: {id}})
            return res.json(brands)
        }
        brands = await DeviceType.findAll()
        return res.json(brands)
    }

}