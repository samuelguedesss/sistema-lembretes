import {ConflictError} from '../error/AppError.js'
import bcrypt from 'bcrypt'

export class UsuarioService {
    constructor(repository) {
        this.repository = repository
    }

    async criar(dados) {
        const usuario = await this.repository.buscarPorEmail(dados.email);

        if(usuario) {
            throw new ConflictError('Usuario');
        }

        const hashSenha = await bcrypt.hash(dados.senha, 10)

        await this.repository.criar({
            ...dados,
            senha: hashSenha,
        });
    }

    async usuarioId(id) {
        return this.repository.usuarioId(id);
    };

}