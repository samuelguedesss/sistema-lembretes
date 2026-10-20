import { Router } from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { lembreteController } from '../container.js'

const router = Router()

router.post('/', asyncHandler((req, res) => lembreteController.criar(req, res)));
router.get('/:id', asyncHandler((req, res) => lembreteController.buscarPorId(req, res)))
router.get('/:id/lembrete', asyncHandler((req, res) => lembreteController.listarPorUsuario(req, res)))
router.patch('/:id', asyncHandler((req, res) => lembreteController.atualizar(req, res)))

export default router