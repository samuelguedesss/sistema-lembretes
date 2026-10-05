export class AppError extends Error {
    constructor(mensagem = 'Erro interno' , status = 500) {
        super(mensagem)
        this.name = this.constructor.name
        this.status = status
    }
}

export class NotFoundError extends AppError {
    constructor(recurso, mensagem = `${recurso} não encontrado`) {
        super(mensagem, 404)
    }
}

export class ValidationError extends AppError {
    constructor(mensagem = 'Dados invalidos') {
        super(mensagem, 400)
    }
}

export class ConflictError extends AppError {
    constructor(recurso, mensagem = `registro de ${recurso} já existe` ) {
        super(mensagem, 409)
    }
}

export class UnauthorizedError extends AppError {
    constructor(mensagem = 'Credenciais inválidas') {
        super(mensagem, 401)
    }
}

export class ForbiddenError extends AppError {
    constructor(mensagem = 'Acesso Negado') {
        super(mensagem, 403)
    }
}