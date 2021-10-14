import mongoose, { Schema } from 'mongoose';
import { number } from 'yup';

import { ClienteSchema } from '../../cliente/schema/cliente.schema';

const PedidoSchema = new Schema(
  {
    numeroPedido: { type: String, index: true },
    numeroMesa: { type: String },
    valorPedido: { type: Number },
    horarioInical: { type: String },
    horarioMedio: { type: String },
    cpf: { type: String, ref: 'Cliente', index: true },
    // produtos: { type: [number] },
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
).index({ updated_at_mongo: 1 }, { expires: '25h' });
// mongoose.model('Cliente', ClienteSchema);
export { PedidoSchema };
