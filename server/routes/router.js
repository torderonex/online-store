import {Router} from 'express'
import UserController from '../controllers/UserController.js'

const router = new Router()


//device routes
router.get('/device/:id')
router.get('/device')
router.post('/device')

//brand routes
router.get('/brand')
router.post('/brand')

//type routes
router.get('/type')
router.post('/type')

//user routes
router.get('/user/auth')
router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)

//cart routes
router.get('/cart/:userid')

export default router;