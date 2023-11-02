import {User, Cart} from '../models/models.js';
import ApiError from '../errors.js'
import {hashSync, compareSync} from 'bcrypt'
import jwt from 'jsonwebtoken';
import {config} from 'dotenv'
config()

const { sign, verify } = jwt;

export default class UserController{
    static async login(req,res,next){
        try{
            const {email ,password} = req.body;
            const user = await User.findOne({where: {email}})
            if (!user){
                next(ApiError.badRequest(`User doesnt exists`))
            }
            if (!compareSync(password,user.password)){
                next(ApiError.badRequest('Wrong password'))
            }
            const token = sign({id : user.id, email, roles: user.roles}, process.env.SECRET_KEY, {expiresIn : '30d'})
            return res.status(201).json({token: token})
        }catch (e) {
            next(ApiError.InternalError(`Login error ${e.message}`))
        }
    }

    static async register(req,res, next){
        try{
            const {email ,password} = req.body;
            const candidate = await User.findOne({where: {email}})
            if (candidate){
                next(ApiError.badRequest('User already registered'));
            }
            const hashedPassword = hashSync(password, parseInt(process.env.SALT))
            const user = await User.create({email, password:hashedPassword});
            await Cart.create({userId : user.id })
            const token = sign({id : user.id, email, roles: user.roles}, process.env.SECRET_KEY, {expiresIn : '30d'})
            return res.status(201).json({token: token})
        }catch(err){
            next(ApiError.InternalError(`Registration error ${err.message}`))
        }

    }

    static async auth(req,res){

    }


}

