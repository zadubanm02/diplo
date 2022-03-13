import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateItemDTO } from './item.dto';
import { ItemModel } from './item.model';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  createItem(@Body() itemeDTO: CreateItemDTO): Promise<ItemModel> {
    return this.itemService.create(itemeDTO);
  }

  @Get()
  getItems(): Promise<ItemModel[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  getItemById(@Param('id') id: string): Promise<ItemModel> {
    return this.itemService.findOne(id);
  }

  @Delete(':id')
  deleteItemById(@Param('id') id:string): Promise<DeleteResult> {
    return this.itemService.delete(id)
  }
}
