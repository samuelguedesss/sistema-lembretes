export class LembreteRepository {
    constructor(model) {
        this.model = model
    }

    async criarLembreteRepository(dados) {
        return await this.model.create(dados)
    }

}