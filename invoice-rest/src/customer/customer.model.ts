import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { InvoiceModel } from '../invoice/invoice.model';

@Entity()
export class CustomerModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 500, nullable: false })
  name: string;
  @Column('text', { nullable: false })
  email: string;
  @Column('varchar', { length: 15 })
  phone: string;
  @Column('text')
  address: string;

  @OneToMany(type => InvoiceModel, invoice => invoice.customer)
  invoices: InvoiceModel[]
  @Column()
  @CreateDateColumn()
  created_at: Date;
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}