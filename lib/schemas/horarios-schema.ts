import { z } from "zod";

export const diaHorarioSchema = z.object({
    label: z.string(),
    active: z.boolean(),
    start: z.string().optional(),
    end: z.string().optional(),
    hours: z.string().optional()
});

export const horariosSchema = z.object({
    dias: z.array(diaHorarioSchema),
    duracaoConsulta: z.string().min(1, "Obrigatório"),
    intervalo: z.string().min(1, "Obrigatório"),
});

export type HorariosFormData = z.infer<typeof horariosSchema>;
