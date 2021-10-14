import { Schema } from 'mongoose';

const RestauranteSchema = new Schema(
  {
    numeroPedido: { type: String },
    numeroMesa: { type: String },
    valorPedido: { type: String },
    horarioInical: { type: Date },
    horarioMedio: { type: String },
    cpf: { type: String },
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
).index({ updated_at_mongo: 1 }, { expires: '25h' });

export { RestauranteSchema };
