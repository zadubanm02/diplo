import { CustomerModel } from '../customer/customer.model';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  ChildEntity,
} from 'typeorm';


@Entity()
export class ItemModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rate: number;

  // @Column()
  // quantity: number;
}


