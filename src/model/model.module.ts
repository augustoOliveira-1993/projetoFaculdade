import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { PedidoModule } from './pedido/pedido.module';
import { RestauranteModule } from './restaurante/restaurante.module';

@Module({
  imports: [ClienteModule, ProdutoModule, PedidoModule, RestauranteModule],
})
export class ModelModule {}
