import { describe, it, expect } from 'vitest';
import {NotFoundError} from '../../src/error/AppError.js'
import {LembreteService}from '../../src/service/lembreteService.js'

describe('LembreteService', () => {

    describe('criar', () => {
        it('Devolve o lembrete criado', async () => {
            const lembrete = {
                id: 1,
                usuarioId: 1,
                titulo: 'Consulta no dentista',
                descricao: 'Levar exames anteriores',
                dataEvento: new Date('2026-11-20T14:00:00'),
                tipo: 'consulta',
                createdAt: new Date('2026-11-07T10:00:00'),
                updatedAt: new Date('2026-11-07T10:00:00'),
            }
            const repoFake = {
                criar: async (dados) => lembrete
            }
            const service = new LembreteService(repoFake)
            const lembreteCriado = await(service.criar({usuarioId: 1, titulo: 'Consulta no dentista', descricao: 'Levar exames anteriores', dataEvento: new Date('2026-11-20T14:00:00'), tipo: 'consulta'}))
            expect(lembreteCriado).toEqual(lembrete)
        })
    })


    describe('buscarPorId', () => {
        it('Deve lançar NotFoundError se não existir lembrete', async () => {
            const repoFake = {
                buscarPorId: async (id) => null,
            }
            const id = 2
            const service = new LembreteService(repoFake)
            await expect(service.buscarPorId(id)).rejects.toThrow(NotFoundError);
        })

        it('Devolve o lembrete', async () => {
            const dados = {
                id: 1,
                usuarioId: 1,
                titulo: 'Consulta no dentista',
                descricao: 'Levar exames anteriores',
                dataEvento: new Date('2026-11-20T14:00:00'),
                tipo: 'consulta',
                createdAt: new Date('2026-11-07T10:00:00'),
                updatedAt: new Date('2026-11-07T10:00:00'),
            }
            const repoFake = {
                buscarPorId: async (id) => dados,
            }
            const service = new LembreteService(repoFake)
            const lembrete = await(service.buscarPorId(1))
            expect(lembrete).toEqual(dados)
        })
    })

    describe('listarPorUsuario', () => {
        it('Devolve um array de lembretes do usuario', async () => {
        const lembretes = [
            { id: 1, usuarioId: 1, titulo: 'Consulta no dentista', descricao: 'Levar exames anteriores', dataEvento: new Date('2026-11-20T14:00:00'), tipo: 'consulta' },
            { id: 2, usuarioId: 1, titulo: 'Pagar conta de luz', descricao: 'Vence dia 25', dataEvento: new Date('2026-11-25T09:00:00'), tipo: 'conta' },
            { id: 3, usuarioId: 1, titulo: 'Aniversário da mãe', dataEvento: new Date('2026-12-02T00:00:00'), tipo: 'aniversario' },
        ]
        const repoFake = {
            listarPorUsuario: async (usuarioId) => lembretes,
        }
        const service = new LembreteService(repoFake)
        const arrayLembretes = await (service.listarPorUsuario(1))
        expect(arrayLembretes).toEqual(lembretes)

    })

        it('Devolve um array vazio, sem lancar um erro', async () => {
            const lembretes = []
            const repoFake = {
                listarPorUsuario: async (usuarioId) => lembretes
            }
            const service = new LembreteService(repoFake)
            const arrayLembretes = await (service.listarPorUsuario(1))
            expect(arrayLembretes).toEqual(lembretes)
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

    describe('deletar', () => {
        it('lança NotFoundError se a quantidade de linhas apagadas for 0', async () => {
            const repoFake = {
                deletar: async (id) => 0
            }
            const service = new LembreteService(repoFake)
            await expect(service.deletar(1)).rejects.toThrow(NotFoundError)
        })

        it('Sucesso ao deletar lembrete', async () => {
            const linhas = 1
            const repoFake = {
                deletar: async (id) => linhas
            }

            const service = new LembreteService(repoFake)
            await expect(service.deletar(1)).resolves.toBeUndefined()
        })
    })
})