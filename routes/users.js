import { Router } from "express";
import Users from "../controllers/user_controller.js";

const router = Router();

router.get('/', Users.index);
router.post('/', Users.store);
router.put('/:id', Users.update);
router.delete('/:id', Users.destroy);

export default router;