import { z } from 'zod'

export const criarLembrete = z.object({
    titulo: z.string({message: 'Titulo do lembrete e obrigatorio'})
        .min(5, 'Titulo deve ter no mínimo 5 caracteres'),

    descricao: z.string()
        .min(5, 'descricao deve ter no mínimo 5 caracteres').optional(),
    
    dataEvento: z.coerce.datetime({message: 'Data obrigatoria'}),

    tipo: z.string({message: 'tipo e obrigatorio'})
        .max(40, 'Maximo 40 carcteres no tipo')
});