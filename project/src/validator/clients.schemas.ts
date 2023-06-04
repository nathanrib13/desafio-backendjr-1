import { z } from "zod";

const createClientSchema = z.object({
  nome: z.string(),
  idade: z.string().max(3),
  cpf: z.string().max(12),
  rg: z.string(),
  data_nasc: z.string(),
  mae: z.string(),
  pai: z.string(),
  senha: z.string(),
  sexo: z.string(),
  cep: z.string().max(8),
  endereco: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  altura: z.string(),
  peso: z.string(),
  tipo_sanguineo: z.string().max(3),
  cor: z.string(),
  signo: z.string(),
  telefone_fixo: z.string().max(12),
  celular: z.string().max(12),
  email: z.string(),
});

const createClientSchemaReturn = createClientSchema.omit({ senha: true });

export { createClientSchema, createClientSchemaReturn };
