import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Pedido } from '../interfaces/pedido.interfaces';

@Injectable()
export class PedidoRepository {
  constructor(
    @InjectModel('Pedido') private readonly pedidoModel: Model<Pedido>,
  ) {}

  async findAll(): Promise<Pedido[]> {
    return this.pedidoModel.find().exec();
  }

  async create(createDB: any): Promise<Pedido> {
    const createdUser = new this.pedidoModel(createDB);
    return createdUser.save();
  }

  // async findAtMongo(codigoDoProduto: string): Promise<Produto> {
  //   return await this.produtoModel.findOne({ codigoDoProduto }).exec();
  // }

  // async delete(codigoDoProduto: string): Promise<Produto> {
  //   return await this.produtoModel.findByIdAndRemove({ codigoDoProduto });
  // }

  // async update(codigoDoProduto: string, produto: any): Promise<Produto> {
  //   return await this.produtoModel.findByIdAndUpdate(codigoDoProduto, produto, {
  //     new: true,
  //   });
  // }
}
