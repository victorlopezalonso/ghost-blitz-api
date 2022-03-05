import { Router } from 'express'
import SessionController from '../app/controllers/sessionController.js'
import verifyToken from '../app/middlewares/authMiddleware.js'

const router = Router()

router.get('/', verifyToken, SessionController.index)

export default router
