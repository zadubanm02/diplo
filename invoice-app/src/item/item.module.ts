import { CustomerModule } from '../customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemModel } from './item.model';
import { ItemResolver } from './item.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemModel]),
    forwardRef(() => CustomerModule),
  ],
  providers: [ItemService, ItemResolver],
  exports: [ItemService],
})
export class ItemModule {}
