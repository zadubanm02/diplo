import { ItemModel } from './item.model';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateItemDTO } from './item.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemModel)
    private itemRepository: Repository<ItemModel>,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async create(item: CreateItemDTO): Promise<ItemModel> {
    return this.itemRepository.save(item);
  }

  findAll(): Promise<ItemModel[]> {
    return this.itemRepository.find();
  }

  findMultiple(ids: string[]): Promise<Array<ItemModel>> {
    return this.itemRepository.findByIds(ids)
  }

  findOne(id: string): Promise<ItemModel> {
    return this.itemRepository.findOne(id);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.itemRepository.delete(id)
  }
}
