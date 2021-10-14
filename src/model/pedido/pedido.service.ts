import { Injectable } from '@nestjs/common';
import { PedidoRepository } from './repositories/pedido.mongo';

@Injectable()
export class PedidoService {
  constructor(private readonly pedidoRepo: PedidoRepository) {}

  async search() {
    return await this.pedidoRepo.findAll();
  }

  async create(createDB: any) {
    return await this.pedidoRepo.create(createDB);
  }
  // //
  //   async delete(id: string) {
  //     return await this.clienteRepo.delete(id);
  //   }

  //   async update(id: string, produto: any) {
  //     return await this.clienteRepo.update(id, produto);
  //   }

  //   async pegandoIdMongo(id: string) {
  //     const pegandoId = await this.clienteRepo.findAll();
  //     return pegandoId.filter(r => r._id == id);
  //   }
}
