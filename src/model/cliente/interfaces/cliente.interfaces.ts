import { Document } from 'mongoose';

export interface Cliente extends Document {
  readonly cpf: string;
  readonly nome: string;
  readonly email: string;
  readonly telefone: string;
}
