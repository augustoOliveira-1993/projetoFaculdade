import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
// import { ProdutoResolver } from './produto.resolver';
import { ProdutoRepository } from './repositories/produto.mongo';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutoSchema } from './schema/produto.schema';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Produto', schema: ProdutoSchema, collection: 'Produtos' },
    ]),
  ],
  providers: [ProdutoService, ProdutoRepository],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
