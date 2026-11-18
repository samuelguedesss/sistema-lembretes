import { Router } from "express";
import lembreteRoutes from './LembreteRoutes.js'
import usuarioRoutes from './UsuarioRoutes.js'
const router = Router()

router.use('/lembretes', lembreteRoutes);
router.use('/usuarios', usuarioRoutes)

export default router