export class UsuarioController {
    constructor(service) {
        this.service = service
    }

    async criar(req, res) {
        const usuario = await this.service.criar(req.body);
        return res.status(201).json(usuario)
    }
}