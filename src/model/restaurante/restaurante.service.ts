import { Injectable } from '@nestjs/common';
import { RestauranteRepository } from './repositories/restaurante.mongo';

@Injectable()
export class RestauranteService {
  constructor(private readonly restauranteRepo: RestauranteRepository) {}

  async searchBySku(cnpj: string) {
    // this.pegandoIdMongo(id);
    return await this.restauranteRepo.findAtMongo(cnpj);
  }

  async search() {
    return await this.restauranteRepo.findAll();
  }

  async create(createDB: any) {
    return await this.restauranteRepo.create(createDB);
  }

  async delete(cnpj: string) {
    return await this.restauranteRepo.delete(cnpj);
  }

  async update(cnpj: string, restaurante: any) {
    return await this.restauranteRepo.update(cnpj, restaurante);
  }

  async pegandoIdMongo(id: string) {
    const pegandoId = await this.restauranteRepo.findAll();
    return pegandoId.filter(r => r._id == id);
  }
}
