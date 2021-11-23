import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Produto } from '../interfaces/produto.interface';

@Injectable()
export class ProdutoRepository {
  constructor(
    @InjectModel('Produto') private readonly produtoModel: Model<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }

  async create(createDB: any): Promise<Produto> {
    const createdUser = new this.produtoModel(createDB);
    return createdUser.save();
  }

  async findAtMongo(codigoProduto: string): Promise<Produto> {
    return await this.produtoModel.findOne({ codigoProduto }).exec();
  }

  async delete(codigoProduto: string): Promise<Produto> {
    return await this.produtoModel.findOneAndDelete({ codigoProduto });
  }

  async update(codigoProduto: string, produto: any): Promise<Produto> {
    return await this.produtoModel.findOneAndUpdate(
      { codigoProduto: codigoProduto },
      produto,
      { new: true },
    );
  }
}
