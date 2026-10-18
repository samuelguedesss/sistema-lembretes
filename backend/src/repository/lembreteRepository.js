export class LembreteRepository {
    constructor(model) {
        this.model = model
    }

    async criar(dados) {
        return await this.model.create(dados)
    }

    async buscarPorId(id) {
        return await this.model.findByPk(id)
    }

    async listarPorUsuario(usuarioId) {
        return await this.model.findAll({
            where: { usuarioId: usuarioId }
        });
    }

    async atualizar(id, dados) {
        return await this.model.update(dados, {
            where: { id } ,
        });
    }

    async deletar(id) {
        return await this.model.destroy({
            where: { id },
        });
    }
}