export class LembreteController {
    constructor(service) {
        this.service = service
    }

    async criar(req, res) {
        const lembrete = await this.service.criar(req.body);
        return res.status(201).json(lembrete);
    }
}