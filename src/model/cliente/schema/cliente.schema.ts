import { Schema } from 'mongoose';

const ClienteSchema = new Schema(
  {
    cpf: { type: String, index: true },
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
    telefone: { type: String },
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
).index({ updated_at_mongo: 1 }, { expires: '25h' });

export { ClienteSchema };
