import { CustomerModule } from '../customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemModel } from './item.model';
import { ItemController } from './item.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemModel]),
    forwardRef(() => CustomerModule),
  ],
  providers: [ItemService],
  controllers: [ItemController],
  exports: [ItemService],
})
export class ItemModule {}
