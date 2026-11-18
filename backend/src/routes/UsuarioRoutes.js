import { Router } from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { usuarioController } from '../container.js'

const router = Router()

router.post('/', asyncHandler((req, res) => usuarioController.criar(req, res)))

export default router