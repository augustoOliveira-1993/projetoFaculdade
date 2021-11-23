import { Schema } from 'mongoose';

const ProdutoSchema = new Schema(
  {
    codigoProduto: { type: String },
    nome: { type: String },
    descricao: { type: String },
    preco: { type: Number },

    informacaoNutricional: { type: String },
    tempoPreparo: { type: String },
    categoria: { type: String },
  },
  {
    timestamps: {
      createdAt: 'created_at_mongo',
      updatedAt: 'updated_at_mongo',
    },
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
).index({ updated_at_mongo: 1 }, { expires: '25h' });

export { ProdutoSchema };
