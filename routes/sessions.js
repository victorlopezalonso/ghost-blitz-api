import { Router } from 'express'
import SessionController from '../app/controllers/sessionController.js'
import verifyToken from '../app/middlewares/authMiddleware.js'
import bearerPresent from '../app/middlewares/bearerMiddleware.js'

const router = Router()

router.get('/', verifyToken, SessionController.index)
router.post('/', SessionController.store)
router.put('/', bearerPresent, SessionController.update)
router.delete('/', bearerPresent, SessionController.destroy)

export default router
