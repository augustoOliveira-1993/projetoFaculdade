import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Put(':cpf')
  async atualizar(
    @Param('cpf') cpf: string,
    @Body() cliente: Cliente,
  ): Promise<Cliente> {
    return this.clienteService.update(cpf, cliente);
  }

  @Delete(':cpf')
  async remover(@Param('cpf') cpf: string): Promise<Cliente> {
    return this.clienteService.delete(cpf);
  }
}
