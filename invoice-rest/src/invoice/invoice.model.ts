import { CustomerModel } from './../customer/customer.model';
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
import { ItemModel } from '../item/item.model';

export enum Currency {
  NGN = 'NGN',
  USD = 'USD',
  GBP = 'GBP',
  EUR = 'EUR',
}
export enum PaymentStatus {
  PAID = 'PAID',
  NOT_PAID = 'NOT_PAID',
}

export class Item {
  quantity: number;
  item:ItemModel
}


@Entity()
export class InvoiceModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500, nullable: false })
  invoiceNo: string;

  @Column('text')
  description: string;

  @ManyToOne(
    type => CustomerModel,
    customer => customer.invoices,
  )
  customer: CustomerModel;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.NOT_PAID,
  })
  paymentStatus: PaymentStatus;

  @Column({
    type: 'enum',
    enum: Currency,
    default: Currency.USD,
  })
  currency: Currency;

  @Column()
  taxRate: number;

  @Column()
  issueDate: string;

  @Column()
  dueDate: string;

  @Column('text')
  note: string;

  @Column({
    type: 'jsonb',
    array: false,
    default: [],
    nullable: false,
  })
  items: Item[];

  @Column()
  taxAmount: number;

  @Column({
    type: 'float',
    default: 0.0,
  })
  subTotal: string;

  @Column({
    type: 'float',
    default: 0.0,
  })
  total: string;

  @Column({
    type: 'float',
    default: 0.0,
  })
  amountPaid: string;

  @Column({ type: 'float', default: 0.0 })
  outstandingBalance: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
