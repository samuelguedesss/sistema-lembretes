import { Router } from "express";
import lembreteRoutes from './LembreteRoutes.js'

const router = Router()

router.use('/lembretes', lembreteRoutes);

export default router