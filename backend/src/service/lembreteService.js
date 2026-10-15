export class LembreteService {
    constructor(repository) {
        this.repository = repository;
    }

    async criar(dados) {
        return await this.repository.criarLembreteRepository(dados);
    }
}