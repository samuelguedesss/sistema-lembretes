import { Router } from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { lembreteController } from '../container.js'

const router = Router()

router.post('/', asyncHandler((req, res) => lembreteController.criar(req, res)));

export default router