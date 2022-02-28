import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateInvoiceDTO } from './invoice.dto';
import { InvoiceModel } from './invoice.model';
import { InvoiceService } from './invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  createInvoice(@Body() invoiceDTO: CreateInvoiceDTO): Promise<InvoiceModel> {
    return this.invoiceService.create(invoiceDTO);
  }

  @Get()
  getInvoices(): Promise<InvoiceModel[]> {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  getInvoiceById(@Param('id') id: string): Promise<InvoiceModel> {
    return this.invoiceService.findOne(id);
  }

  @Get(':customerId')
  getInvoiceByCustomer(
    @Param('customerId') id: string,
  ): Promise<InvoiceModel[]> {
    return this.invoiceService.findByCustomer(id);
  }
}
