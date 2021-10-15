import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from '../produto/interfaces/produto.interface';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async search(): Promise<Produto[]> {
    return await this.produtoService.search();
  }

  @Post()
  async criar(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Get(':codigoDoProduto')
  async buscarPorId(
    @Param('codigoProduto') codigoProduto: number,
  ): Promise<Produto> {
    return this.produtoService.searchBySku(codigoProduto);
  }

  @Put(':codigoProduto')
  async atualizar(
    @Param('codigoProduto') codigoProduto: number,
    @Body() produto: Produto,
  ): Promise<Produto> {
    return this.produtoService.update(codigoProduto, produto);
  }

  @Delete(':codigoProduto')
  async remover(
    @Param('codigoProduto') codigoProduto: number,
  ): Promise<Produto> {
    return this.produtoService.delete(codigoProduto);
  }
}
