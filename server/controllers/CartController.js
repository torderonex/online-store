import ApiError from "../errors.js";
import {Cart, CartDevice} from "../models/models.js";
export default class CartController{
    static async addToCart(req,res,next){
        const {deviceId, userId} = req.body;
        if (!user || !deviceId) {
            return next(ApiError.badRequestError("No user or device provided"));
        }
        const cart = Cart.findOne({userId});
        CartDevice.create({deviceId, userId: userId})
    }

    static async getCart(req,res,next){
    
    }


}