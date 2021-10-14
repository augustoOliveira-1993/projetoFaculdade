import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PedidoRepository } from './repositories/pedido.mongo';
import { PedidoSchema } from './schema/pedido.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Pedido', schema: PedidoSchema, collection: 'Pedido' },
    ]),
  ],
  providers: [PedidoService, PedidoRepository],
  controllers: [PedidoController],
})
export class PedidoModule {}
