// app.module.ts

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './apis/boards/boards.module';
import { Product } from './apis/products/entities/product.entity';
import { ProductCategory } from './apis/ProductCategory/entities/ProductCategory.entity';
import { ProductSaleslocation } from './apis/productSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from './apis/ProductTags/entities/ProductTag.entity';
import { User } from './apis/users/entities/user.entity';

@Module({
  imports: [
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dlwogk23', // 본인이 설정한 비밀번호
      database: 'myproject', // 변경
      entities: [
        Product,
        ProductCategory,
        ProductSaleslocation,
        ProductTag,
        User,
      ],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
