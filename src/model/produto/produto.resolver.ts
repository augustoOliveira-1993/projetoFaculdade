// import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { ProdutType } from './dto/produto.dto';
// import { ProdutoInput } from './dto/produto.input';
// import { Produto } from './interfaces/produto.interface';
// import { ProdutoService } from './produto.service';

// @Resolver(() => ProdutType)
// export class ProdutoResolver {
//   constructor(private readonly produtoService: ProdutoService) {}

//   @Query(() => [ProdutType])
//   async Buscar() {
//     return await this.produtoService.search();
//   }

//   @Query(() => [ProdutType])
//   async BuscarPorId(@Args('id') id: string) {
//     return await this.produtoService.searchBySku(id);
//   }

//   @Mutation(() => ProdutType)
//   async Cadastrar(@Args('Produto') produto: ProdutoInput) {
//     return await this.produtoService.create(produto);
//   }

//   @Mutation(() => ProdutType)
//   async Excluir(@Args('id') id: string) {
//     return await this.produtoService.delete(id);
//   }

//   @Mutation(() => ProdutType)
//   async AlterarItem(
//     @Args('id') id: string,
//     @Args('input') input: ProdutoInput,
//   ): Promise<ProdutoInput> {
//     return this.produtoService.update(id, input);
//   }
// }
