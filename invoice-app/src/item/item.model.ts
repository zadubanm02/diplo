import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteResult,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class ItemModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  rate: number;
}

@ObjectType()
export class DeleteOutput extends DeleteResult {
  @Field()
  raw: string;

  @Field()
  affected?: number;
}



