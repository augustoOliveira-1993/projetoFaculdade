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

  async create(createDB: any): Promise<Cliente> {
    const createdUser = new this.clienteModel(createDB);
    return createdUser.save();
  }
  async findAtMongo(cpf: string): Promise<Cliente> {
    return await this.clienteModel.findOne({ cpf }).exec();
  }

  async findAtMongoEmail(email: string): Promise<Cliente> {
    return await this.clienteModel.findOne({ email }).exec();
  }

  async delete(cpf: string): Promise<Cliente> {
    return await this.clienteModel.findOneAndDelete({ cpf });
  }

  async update(cpf: string, cliente: any): Promise<Cliente> {
    return await this.clienteModel.findOneAndUpdate({ cpf: cpf }, cliente, {
      new: true,
    });
  }
}
