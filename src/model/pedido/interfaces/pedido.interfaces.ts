import { Document } from 'mongoose';

export interface Pedido extends Document {
  readonly numeroPedido: string;
  readonly numeroMesa: string;
  readonly valorPedido: number;
  readonly horarioInical: string;
  readonly horarioMedio: string;
  readonly cpf: string;
  readonly produtos: number[];
}
