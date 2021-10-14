import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './interfaces/pedido.interfaces';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  async search(): Promise<Pedido[]> {
    return await this.pedidoService.search();
  }

  @Post()
  async criar(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.create(pedido);
  }

  // @Get(':codigoDoProduto')
  // async buscarPorId(
  //   @Param('codigoProduto') codigoProduto: string,
  // ): Promise<ProdPedidouto> {
  //   return this.pedidoService.searchBySku(codigoProduto);
  // }

  // @Put(':id')
  // async atualizar(
  //   @Param('codigoProduto') id: string,
  //   @Body() produto: Produto,
  // ): Promise<Produto> {
  //   return this.pedidoService.update(id, produto);
  // }

  // @Delete(':codigoProduto')
  // async remover(
  //   @Param('codigoProduto') codigoProduto: string,
  // ): Promise<Produto> {
  //   return this.pedidoService.delete(codigoProduto);
  // }
}
