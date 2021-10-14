import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Cliente } from '../interfaces/cliente.interfaces';

@Injectable()
export class ClienteRepository {
  constructor(
    @InjectModel('Cliente') private readonly clienteModel: Model<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  // async buscarPorSku(sku: string): Promise<Produto> {
  //   return await this.produtoModel.findOne({ sku }).exec();
  // }

  async create(createDB: any): Promise<Cliente> {
    const createdUser = new this.clienteModel(createDB);
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
