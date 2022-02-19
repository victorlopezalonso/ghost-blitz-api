import { Router } from "express";
const router = Router();

router.get('/', (_, res) => res.json({ service: 'settings index'}));

export default router;