import { Document } from 'mongoose';

export interface Restaurante extends Document {
  readonly cnpj: string;
  readonly nomeFantasia: string;
  readonly endereco: string;
  readonly telefone: string;
}
