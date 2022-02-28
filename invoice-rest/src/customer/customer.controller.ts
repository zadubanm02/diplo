import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerDTO } from './customer.dto';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): Promise<CustomerDTO[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('íd') id: string): Promise<CustomerModel> {
    return this.customerService.findOne(id);
  }

  @Post()
  createCustomer(@Body() customerDto: CustomerDTO): Promise<CustomerModel> {
    return this.customerService.create(customerDto);
  }
}
