import { CustomerModule } from './../customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { InvoiceModel } from './invoice.model';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceModel]), forwardRef(() => CustomerModule), forwardRef(() => ItemModule)],
  providers: [InvoiceService, InvoiceResolver],
  exports: [InvoiceService]
})
export class InvoiceModule {}
