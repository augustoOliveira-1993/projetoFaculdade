import { Document } from 'mongoose';

export interface Produto extends Document {
  readonly codigoProduto: number;
  readonly nome: string;
  readonly descricao: string;
  readonly informacaoNutricional: string;
  readonly tempoPreparo: string;
  readonly categoria: string;
  readonly preco: number;
}
