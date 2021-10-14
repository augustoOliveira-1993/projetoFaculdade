import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestauranteRepository } from './repositories/restaurante.mongo';
import { RestauranteController } from './restaurante.controller';
import { RestauranteService } from './restaurante.service';
import { RestauranteSchema } from './schema/restaurante.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Restaurante',
        schema: RestauranteSchema,
        collection: 'Restaurante',
      },
    ]),
  ],
  providers: [RestauranteService, RestauranteRepository],
  controllers: [RestauranteController],
})
export class RestauranteModule {}
