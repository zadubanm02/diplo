import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';
import { CreateItemDTO } from './item.dto';
import { DeleteOutput, ItemModel } from './item.model';
import { ItemService } from './item.service';

@Resolver(of => ItemModel)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  @Mutation(returns => ItemModel)
  async createItem(@Args('item') itemeDTO: CreateItemDTO): Promise<ItemModel> {
    return this.itemService.create(itemeDTO);
  }

  @Query(returns => ItemModel)
  async getItems(): Promise<ItemModel[]> {
    return this.itemService.findAll();
  }

  @Query(returns => ItemModel)
  async getItemById(@Args('id') id: string): Promise<ItemModel> {
    return this.itemService.findOne(id);
  }

  @Mutation(returns => DeleteOutput)
  async deleteItemById(@Args('id') id:string): Promise<DeleteOutput> {
    return this.itemService.delete(id)
  }
}
