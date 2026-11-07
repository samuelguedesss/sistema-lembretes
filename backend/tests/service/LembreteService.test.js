import { describe, it, expect } from 'vitest';
import {NotFoundError} from '../../src/error/AppError.js'
import {LembreteService}from '../../src/service/lembreteService.js'

describe('LembreteService', () => {
    describe('buscarPorId', () => {
        it('Deve lançar NotFoundError se não existir lembrete', async () => {
            const repoFake = {
                buscarPorId: async (id) => null,
            }
            const id = 2
            const service = new LembreteService(repoFake)
            await expect(service.buscarPorId(id)).rejects.toThrow(NotFoundError);
        })
    })

    describe('atualizar', () => {
        it('lança NotFoundError se o lembrete não existe', async () => {
            const repoFake = {
                 buscarPorId: async (id) => null,
                 atualizar: async (dados) => ({...dados}),
            }

            const service = new LembreteService(repoFake)
            await expect(service.atualizar(1, {titulo: 'testeAtualizar', descricao: 'testeDescricaoAtualizar'})).rejects.toThrow(NotFoundError)
        })

        it('Devolve o lembrete atualizado', async () => {
            const lembrete = {id: 1, titulo:'testeTitulo', descricao: 'testeDescricao'}
            const repoFake = {
                buscarPorId: async (id) => (lembrete),
                atualizar: async (id, dados) => [1]
            }

            const service = new LembreteService(repoFake)
            const atualizar = await (service.atualizar(1, {titulo:'testeTitulo', descricao: 'testeDescricao'}))
            expect(atualizar).toEqual(lembrete)
        })
    })
})