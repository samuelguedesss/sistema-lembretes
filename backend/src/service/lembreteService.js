import { NotFoundError } from '../error/AppError.js';

export class LembreteService {
    constructor(repository) {
        this.repository = repository;
    }

    async criar(dados) {
        return await this.repository.criar(dados);
    }

    async buscarPorId(id) {
        const lembrete = await this.repository.buscarPorId(id)

        if(lembrete === null) {
            throw new NotFoundError('Lembrete')
        }

        return lembrete
    }

    async listarPorUsuario(usuarioId) {
        const lembretes = await this.repository.listarPorUsuario(usuarioId);
        return lembretes;
    }

    async atualizar(id, dados) {
        await this.buscarPorId(id);
        await this.repository.atualizar(id, dados);
        return await this.buscarPorId(id);
    }

    async deletar(id) {
        const linhasApagadas = await this.repository.deletar(id);
        if (linhasApagadas === 0) {
            throw new NotFoundError('Lembrete')
        }

    }
}