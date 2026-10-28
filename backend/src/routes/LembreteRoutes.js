import { Router } from 'express'
import { asyncHandler } from '../middleware/asyncHandler.js'
import { lembreteController } from '../container.js'
import { validate } from '../middleware/validate.js'
import { criarLembrete } from '../schemas/lembreteSchema.js'


const router = Router()

router.post('/', validate(criarLembrete), asyncHandler((req, res) => lembreteController.criar(req, res)));
router.get('/:id', asyncHandler((req, res) => lembreteController.buscarPorId(req, res)))
router.get('/', asyncHandler((req, res) => lembreteController.listarPorUsuario(req, res)))
router.patch('/:id', asyncHandler((req, res) => lembreteController.atualizar(req, res)))
router.delete('/:id', asyncHandler((req, res) => lembreteController.deletar(req, res)))

export default router