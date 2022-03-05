import { Router } from 'express'
import Users from '../app/controllers/userController.js'
import UserStoreRequest from '../app/requests/UserStoreRequest.js'

const router = Router()

router.get('/', Users.index)
router.post('/', UserStoreRequest(Users.store))
router.put('/:id', Users.update)
router.delete('/:id', Users.destroy)

export default router
