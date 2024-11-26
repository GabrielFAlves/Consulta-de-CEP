import { z } from "zod";

export const cadastroSchema = z.object({
  nome: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
  cpf: z
    .string()
    .length(11, "O CPF deve ter exatamente 11 dígitos.")
    .regex(/^\d+$/, "O CPF deve conter apenas números."),
  cep: z
    .string()
    .length(8, "O CEP deve ter exatamente 8 dígitos.")
    .regex(/^\d+$/, "O CEP deve conter apenas números."),
  logradouro: z.string().optional(),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z
    .string()
    .length(2, "O estado deve ter exatamente 2 letras.")
    .toUpperCase()
    .optional(),
});
