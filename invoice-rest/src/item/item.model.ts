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
  ManyToMany,
} from 'typeorm';
//import { InvoiceModel } from '../invoice/invoice.model';


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

  // @ManyToMany(type => InvoiceModel)
  // invoices?: InvoiceModel[]

  // @Column()
  // quantity: number;
}


