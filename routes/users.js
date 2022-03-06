import { Router } from 'express'
import userController from '../app/controllers/userController.js'
import UserStoreRequest from '../app/requests/UserStoreRequest.js'
import { validate } from '../app/requests/validator.js'
import verifyToken from '../app/middlewares/authMiddleware.js'

const router = Router()

router.get('/', verifyToken, userController.index)
router.post('/', validate(UserStoreRequest), userController.store)

export default router
