import {Router} from 'express'
import UserController from '../controllers/UserController.js'
import BrandController from '../controllers/BrandController.js'
import TypeController from '../controllers/TypeController.js'
import CartController from '../controllers/CartController.js'
import DeviceController from '../controllers/DeviceController.js'

const router = new Router()


//device routes
router.get('/device/:id', DeviceController.getOne)
router.get('/device', DeviceController.getAll)
router.post('/device', )

//brand routes
router.get('/brand', BrandController.getAll)
router.get('/brand/type', BrandController.getByType)
router.post('/brand', BrandController.create)


//type routes
router.get('/type', TypeController.getAll)
router.post('/type', TypeController.create)

//user routes
router.get('/user/auth')
router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)

//cart routes
router.get('/cart/:userid')

export default router;