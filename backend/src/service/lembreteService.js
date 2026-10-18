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
        const lembrete = await this.repository.listarPorUsuario(usuarioId)

        // condicao que nao existe lembrete deste usuario
        
        return lembrete
    }

    async atualizar() {

    }

    async deletar() {

    }
}