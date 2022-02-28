import { InvoiceModule } from './../invoice/invoice.module';
import { CustomerModel } from './customer.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { CustomerController } from './customer.controller';

@Module({
  imports: [
    forwardRef(() => InvoiceModule),
    TypeOrmModule.forFeature([CustomerModel]),
  ],
  providers: [CustomerService, CustomerResolver],
  controllers: [CustomerController],
  exports: [CustomerService],
})
export class CustomerModule {}
