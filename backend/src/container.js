import db from './models/index.js'
import { LembreteController } from './controller/lembreteController.js'
import { LembreteRepository } from './repository/lembreteRepository.js'
import { LembreteService } from './service/lembreteService.js'

const lembreteRepository = new LembreteRepository(db.Lembrete)
const lembreteService = new LembreteService(lembreteRepository)
const lembreteController = new LembreteController(lembreteService)

export { lembreteController }

