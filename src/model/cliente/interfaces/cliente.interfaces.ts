import { Document } from 'mongoose';

export interface Cliente extends Document {
  readonly cpf: string;
  readonly nome: string;
  readonly email: string;
  readonly senha: string;
  readonly telefone: string;
}
