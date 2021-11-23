import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../cliente/repositories/cliente.mongo';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepo: ClienteRepository) {}

  async search() {
    return await this.clienteRepo.findAll();
  }
  async searchByCpf(cpf: string) {
    return await this.clienteRepo.findAtMongo(cpf);
  }

  async create(createDB: any) {
    return await this.clienteRepo.create(createDB);
  }
  async delete(cpf: string) {
    return await this.clienteRepo.delete(cpf);
  }

  async update(cpf: string, cliente: any) {
    return await this.clienteRepo.update(cpf, cliente);
  }

  async pegandoIdMongo(id: string) {
    const pegandoId = await this.clienteRepo.findAll();
    return pegandoId.filter(r => r._id == id);
  }
}
