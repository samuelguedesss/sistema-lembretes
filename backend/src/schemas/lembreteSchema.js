import { z } from 'zod'

export const criarLembrete = z.object({

    usuarioId: z.number({ message: 'O id do usuário é obrigatório e deve ser um número' })
        .positive('O id do usuário deve ser positivo').int('O id do usuário deve ser um número inteiro'),

    titulo: z.string({ message: 'O título do lembrete é obrigatório' }).trim()
        .min(5, 'O título deve ter no mínimo 5 caracteres')
        .max(160, 'O título deve ter no máximo 160 caracteres'),

    descricao: z.string().trim()
        .optional(),

    dataEvento: z.coerce.date({ message: 'A data do evento é obrigatória e deve ser uma data válida' }),

    tipo: z.enum(['consulta', 'conta', 'aniversario', 'compromisso', 'estudo', 'outro'], { message: 'Tipo inválido. Use: consulta, conta, aniversario, compromisso, estudo ou outro' }),
});

export const atualizarLembrete = criarLembrete.partial().omit({usuarioId: true}).refine(
    (dados) => Object.keys(dados).length > 0,
    {message: 'Informe pelo menos um campo para atualizar'}
)