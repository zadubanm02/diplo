
import { CustomerModel } from './../customer/customer.model';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, ChildEntity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { ItemModel } from '../item/item.model';

export enum Currency {
  NGN = "NGN",
  USD = "USD",
  GBP = "GBP",
  EUR = " EUR"
}

export enum PaymentStatus {
  PAID = "PAID",
  NOT_PAID = "NOT_PAID",
}

@ObjectType({ isAbstract: true })
export class ItemQuantity {
  @Field()
  quantity: number;

  @Field()
  item:ItemModel
}


@ObjectType()
@Entity()
export class InvoiceModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  invoiceNo: string;

  @Field()
  @Column('text')
  description: string;

  @Field(type => CustomerModel)
  @ManyToOne(type => CustomerModel, customer => customer.invoices)
  customer: CustomerModel;

  @Field()
  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.NOT_PAID
  })
  paymentStatus: PaymentStatus;

  @Field()
  @Column({
    type: "enum",
    enum: Currency,
    default: Currency.USD
  })
  currency: Currency;

  @Field()
  @Column()
  taxRate: number;

  @Field()
  @Column()
  issueDate: string;

  @Field()
  @Column()
  dueDate: string;

  @Field()
  @Column('text')
  note: string;

  @Field( type => [ItemQuantity])
  @Column({
    type: 'jsonb',
    array: false,
    default: [],
    nullable: false,
  })
  Items: ItemQuantity[];

  @Column()
  @Field()
  taxAmount: number;

  @Column({
    type: 'float',
    default: 0.0,
  })
  @Field()
  subTotal: string;

  @Column({
    type: 'float',
    default: 0.0,
  })
  @Field()
  total: string;

  @Column({
    type: 'float',
    default: 0.0,
  })
  @Field()
  amountPaid: string;

  @Column({ type: 'float', default: 0.0 })
  @Field()
  outstandingBalance: string;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}