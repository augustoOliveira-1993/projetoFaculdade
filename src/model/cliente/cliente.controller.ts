import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './interfaces/cliente.interfaces';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async search(): Promise<Cliente[]> {
    return await this.clienteService.search();
  }

  @Post()
  async criar(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.create(cliente);
  }

  // @Get(':codigoDoProduto')
  // async buscarPorId(
  //   @Param('codigoDoProduto') codigoDoProduto: string,
  // ): Promise<Cliente> {
  //   return this.produtoService.searchBySku(codigoDoProduto);
  // }

  // @Put(':id')
  // async atualizar(
  //   @Param('id') id: string,
  //   @Body() gatoAtualizado: Gato,
  // ): Promise<Gato> {
  //   return this.gatosService.atualizar(id, gatoAtualizado);
  // }

  // @Delete(':id')
  // async remover(@Param('id') id: string): Promise<Gato> {
  //   return this.gatosService.remover(id);
  // }
}
