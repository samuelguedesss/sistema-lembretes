import db from './models/index.js'
import { LembreteController } from './controller/lembreteController.js'
import { LembreteRepository } from './repository/lembreteRepository.js'
import { LembreteService } from './service/lembreteService.js'

import { UsuarioController } from './controller/usuarioController.js'
import { UsuarioRepository } from './repository/usuarioRepository.js'
import { UsuarioService } from './service/usuarioService.js'

// Conteiner Lembrete
const lembreteRepository = new LembreteRepository(db.Lembrete)
const lembreteService = new LembreteService(lembreteRepository)
const lembreteController = new LembreteController(lembreteService)

// Conteiner Usuario
const usuarioRepository = new UsuarioRepository(db.Usuario)
const usuarioService = new UsuarioService(usuarioRepository)
const usuarioController = new UsuarioController(usuarioService)

export { lembreteController, usuarioController }

