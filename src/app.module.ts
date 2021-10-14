import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ModelModule } from './model/model.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        const { DB_HOST, DB_PORT, DB_NAME } = process.env;
        const uri = `mongodb://${DB_HOST}:${DB_PORT}`;
        return {
          uri,
          dbName: DB_NAME,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        };
      },
    }),
    ModelModule,
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
  ],
})
export class AppModule {}
