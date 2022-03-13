import { CustomerService } from './../customer/customer.service';
import { InvoiceModel } from './invoice.model';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInvoiceDTO } from './invoice.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { ItemService } from 'src/item/item.service';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceModel)
    private invoiceRepository: Repository<InvoiceModel>,
    private customerService: CustomerService,
    private itemService: ItemService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async create(invoice: CreateInvoiceDTO): Promise<InvoiceModel> {
    const customer = await this.customerService.findOne(invoice.customer);
    const items = await this.itemService.findMultiple(invoice.items.map(item => item.id))
    const subTotal = items.reduce((acc, item) => {
      const found = invoice.items.find(it => it.id === item.id)
      return acc + Number((item.rate * found.quantity).toFixed(0));
    }, 0);

    const taxAmount = subTotal * Number((invoice.taxRate / 100).toFixed(0));
    const total = subTotal + taxAmount;
    const outstandingBalance = total;

    this.logger.log('info', { taxAmount, total, subTotal, outstandingBalance });

    console.log(
      'Tax amount',
      taxAmount,
      'Totoal',
      total,
      subTotal,
      outstandingBalance,
    );

    return this.invoiceRepository.save({
      ...invoice,
      customer,
      subTotal,
      taxAmount,
      total,
      outstandingBalance,
    } as any);
  }

  findAll(): Promise<InvoiceModel[]> {
    return this.invoiceRepository.find();
  }

  findByCustomer(id: string): Promise<InvoiceModel[]> {
    return this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.customer = :id', { id })
      .getMany();
  }

  findOne(id: string): Promise<InvoiceModel> {
    return this.invoiceRepository.findOne(id);
  }
}
