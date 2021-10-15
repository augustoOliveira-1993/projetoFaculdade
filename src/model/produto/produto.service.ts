import { Injectable } from '@nestjs/common';
// import { Produto } from './interfaces/produto.interface';
import { ProdutoRepository } from './repositories/produto.mongo';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepo: ProdutoRepository) {}

  async searchBySku(codigoProduto: number) {
    // this.pegandoIdMongo(id);
    return await this.produtoRepo.findAtMongo(codigoProduto);
  }

  async search() {
    return await this.produtoRepo.findAll();
  }

  async create(createDB: any) {
    return await this.produtoRepo.create(createDB);
  }

  async delete(codigoProduto: number) {
    return await this.produtoRepo.delete(codigoProduto);
  }

  async update(codigoProduto: number, produto: any) {
    return await this.produtoRepo.update(codigoProduto, produto);
  }

  async pegandoIdMongo(id: string) {
    const pegandoId = await this.produtoRepo.findAll();
    return pegandoId.filter(r => r._id == id);
  }
}
