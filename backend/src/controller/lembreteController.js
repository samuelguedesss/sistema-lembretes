export class LembreteController {
    constructor(service) {
        this.service = service
    }

    async criar(req, res) {
        const lembrete = await this.service.criar(req.body);
        return res.status(201).json(lembrete);
    }

    async buscarPorId(req, res) {
        const id = Number(req.params.id);
        const lembrete = await this.service.buscarPorId(id);
        return res.status(200).json(lembrete);
    }

    async listarPorUsuario(req, res) {
        const usuarioId = Number(req.params.id);
        const lembrete = await this.service.listarPorUsuario(usuarioId);
        return res.status(200).json(lembrete);
    }

    async atualizar(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        const atualizar = await this.service.atualizar(id, dados);
        return res.status(200).json(atualizar);
    }
}