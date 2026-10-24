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
        const usuarioId = Number(req.query.usuario);
        const lembretes = await this.service.listarPorUsuario(usuarioId);
        return res.status(200).json(lembretes);
    }

    async atualizar(req, res) {
        const id = Number(req.params.id);
        const dados = req.body;
        const lembrete = await this.service.atualizar(id, dados);
        return res.status(200).json(lembrete);
    }

    async deletar(req, res) {
        const id = Number(req.params.id)
        this.service.deletar(id)
        return res.sendStatus(204);
    }
}