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

  async create(createDB: any): Promise<Restaurante> {
    const createdUser = new this.restauranteModel(createDB);
    return createdUser.save();
  }

  async findAtMongo(cnpj: string): Promise<Restaurante> {
    return await this.restauranteModel.findOne({ cnpj }).exec();
  }

  async delete(cnpj: string): Promise<Restaurante> {
    return await this.restauranteModel.findOneAndDelete({ cnpj });
  }

  async update(cnpj: string, restaurante: any): Promise<Restaurante> {
    return await this.restauranteModel.findOneAndUpdate(
      { cnpj: cnpj },
      restaurante,
      { new: true },
    );
  }
}
