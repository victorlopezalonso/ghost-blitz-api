import { Router } from 'express'
import Users from '../app/controllers/userController.js'
import UserStoreRequest from '../app/requests/UserStoreRequest.js'
import { validate } from '../app/requests/validator.js'
import verifyToken from '../app/middlewares/authMiddleware.js'

const router = Router()

router.get('/', verifyToken, Users.index)
router.post('/', validate(UserStoreRequest), Users.store)
// router.put('/:id', verifyToken, Users.update)
// router.delete('/:id', verifyToken, Users.destroy)

export default router
