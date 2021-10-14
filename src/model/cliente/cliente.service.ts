import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../cliente/repositories/cliente.mongo';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepo: ClienteRepository) {}

  async search() {
    return await this.clienteRepo.findAll();
  }

  async create(createDB: any) {
    return await this.clienteRepo.create(createDB);
  }
  // //
  // async delete(id: string) {
  //   return await this.clienteRepo.delete(id);
  // }

  // async update(id: string, produto: any) {
  //   return await this.clienteRepo.update(id, produto);
  // }

  // async pegandoIdMongo(id: string) {
  //   const pegandoId = await this.clienteRepo.findAll();
  //   return pegandoId.filter(r => r._id == id);
  // }
}
