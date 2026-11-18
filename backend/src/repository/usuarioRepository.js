export class UsuarioRepository {
    constructor(model) {
        this.model = model
    }

    async criar(dados) {
        return await this.model.create(dados);
    }

    async usuarioId(id) {
        return await this.model.findByPk(id);
    }

    async buscarPorEmail(email) {
        return this.model.findOne({
            where: {email}
        });
    }
}