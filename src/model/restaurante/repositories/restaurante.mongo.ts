import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Restaurante } from '../interfaces/restaurante.interfaces';

@Injectable()
export class RestauranteRepository {
  constructor(
    @InjectModel('Restaurante')
    private readonly restauranteModel: Model<Restaurante>,
  ) {}

  async findAll(): Promise<Restaurante[]> {
    return this.restauranteModel.find().exec();
  }

  // async buscarPorSku(sku: string): Promise<Produto> {
  //   return await this.produtoModel.findOne({ sku }).exec();
  // }

  async create(createDB: any): Promise<Restaurante> {
    const createdUser = new this.restauranteModel(createDB);
    return createdUser.save();
  }

  // async findAtMongo(codigoProduto: string): Promise<Produto> {
  //   return await this.produtoModel.findOne({ codigoProduto }).exec();
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
