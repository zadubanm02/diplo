import { CustomerModule } from './../customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceModel } from './invoice.model';
import { InvoiceController } from './invoice.controller';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvoiceModel]),
    forwardRef(() => CustomerModule),
    forwardRef(() => ItemModule)
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController],
  exports: [InvoiceService],
})
export class InvoiceModule {}
