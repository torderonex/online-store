import sequelize from '../db.js'
import {DataTypes} from 'sequelize'


export const User = sequelize.define('user', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING,},
    role:{type: DataTypes.STRING, defaultValue: 'USER'},
})

export const Cart = sequelize.define('cart', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId:{type: DataTypes.INTEGER, references: {model: User, key: 'id'}},
})

export const DeviceType = sequelize.define('device_type', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true},
})

export const DeviceBrand = sequelize.define('device_brand', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true},
})

export const Device = sequelize.define('device', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true},
    price:{type: DataTypes.DECIMAL(10, 2)},
    rating:{type: DataTypes.DECIMAL(10, 2)},
    img:{type: DataTypes.STRING},
    typeId:{type: DataTypes.INTEGER, references: {model: DeviceType, key:'id'}},
    brandId:{type: DataTypes.INTEGER, references: {model: DeviceBrand, key:'id'}}
})

export const CartDevice = sequelize.define('cart_device', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cartId:{type: DataTypes.INTEGER, references: {model: Cart, key: 'id'}},
    deviceId:{type: DataTypes.INTEGER, references: {model: Device, key: 'id'}},
})

export const DeviceInfo = sequelize.define('device_info', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    deviceId:{type: DataTypes.INTEGER, references: {model: DeviceBrand, key: 'id'}},
    name:{type: DataTypes.STRING},
    value:{type: DataTypes.STRING},
})

export const Review = sequelize.define('rating', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId:{type: DataTypes.INTEGER, references: {model: User, key: 'id'}},
    deviceId:{type: DataTypes.INTEGER, references: {model: Device, key: 'id'}},
    rating:{type: DataTypes.DECIMAL(10, 2)},
    title :{type: DataTypes.STRING},
    comment:{type: DataTypes.STRING},
})

export const TypeBrands = sequelize.define('type_brands', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    typeId:{type: DataTypes.INTEGER, references: {model: DeviceType, key:'id'}},
    brandId:{type: DataTypes.INTEGER, references: {model: DeviceBrand, key:'id'}},
})


Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device);

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Review);
Device.hasMany(Review);
Review.belongsTo(Device);
Review.belongsTo(User);

Device.hasMany(CartDevice);
CartDevice.belongsTo(Device);

Device.hasMany(Review);
Review.belongsTo(Device);

DeviceType.hasMany(Device);
Device.belongsTo(DeviceType);

DeviceBrand.hasMany(Device)
Device.belongsTo(DeviceBrand);

DeviceBrand.belongsToMany(DeviceType, {through: TypeBrands});
DeviceBrand.belongsToMany(DeviceType, {through: TypeBrands});

