import { Injectable } from '@nestjs/common';
// import { Produto } from './interfaces/produto.interface';
import { ProdutoRepository } from './repositories/produto.mongo';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepo: ProdutoRepository) {}

  async searchBySku(codigoProduto: string) {
    // this.pegandoIdMongo(id);
    return await this.produtoRepo.findAtMongo(codigoProduto);
  }

  async search() {
    return await this.produtoRepo.findAll();
  }

  async create(createDB: any) {
    createDB.codigoProduto = uuidv4();
    return await this.produtoRepo.create(createDB);
  }

  async delete(codigoProduto: string) {
    return await this.produtoRepo.delete(codigoProduto);
  }

  async update(codigoProduto: string, produto: any) {
    return await this.produtoRepo.update(codigoProduto, produto);
  }

  async pegandoIdMongo(id: string) {
    const pegandoId = await this.produtoRepo.findAll();
    return pegandoId.filter(r => r._id == id);
  }
}
