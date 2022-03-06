import { Router } from 'express'
import verifyToken from '../app/middlewares/authMiddleware.js'
import gameController from '../app/controllers/gameController.js'

const router = Router()

router.get('/', verifyToken, gameController.index)
router.post('/', verifyToken, gameController.store)

export default router
