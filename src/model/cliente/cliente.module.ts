import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { ClienteRepository } from './repositories/cliente.mongo';
import { ClienteSchema } from './schema/cliente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cliente', schema: ClienteSchema, collection: 'Cliente' },
    ]),
  ],
  providers: [ClienteService, ClienteRepository],
  controllers: [ClienteController],
})
export class ClienteModule {}
