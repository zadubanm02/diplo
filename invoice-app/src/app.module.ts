import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { ConnectionOptions } from 'typeorm';
import DatabaseConfig from './config/database.config';
import { ItemModule } from './item/item.module';
import { WinstonModule } from 'nest-winston';


@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig() as ConnectionOptions),
    InvoiceModule,
    CustomerModule,
    ItemModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      //driver: ApolloDriver,
    }),
    WinstonModule.forRoot({
      // options
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
