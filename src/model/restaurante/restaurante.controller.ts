import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Restaurante } from './interfaces/restaurante.interfaces';
import { RestauranteService } from './restaurante.service';

@Controller('restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Get()
  async search(): Promise<Restaurante[]> {
    return await this.restauranteService.search();
  }

  @Post()
  async criar(@Body() restaurante: Restaurante): Promise<Restaurante> {
    return this.restauranteService.create(restaurante);
  }

  @Get(':cnpj')
  async buscarPorId(@Param('cnpj') cnpj: string): Promise<Restaurante> {
    return this.restauranteService.searchBySku(cnpj);
  }

  @Put(':cnpj')
  async atualizar(
    @Param('cnpj') cnpj: string,
    @Body() restaurante: Restaurante,
  ): Promise<Restaurante> {
    return this.restauranteService.update(cnpj, restaurante);
  }

  @Delete(':cnpj')
  async remover(@Param('cnpj') cnpj: string): Promise<Restaurante> {
    return this.restauranteService.delete(cnpj);
  }
}
