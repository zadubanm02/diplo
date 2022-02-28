import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from '../customer/customer.service';
import { InvoiceController } from './invoice.controller';
import { CreateInvoiceDTO } from './invoice.dto';
import { Currency, InvoiceModel, PaymentStatus } from './invoice.model';
import { InvoiceService } from './invoice.service';

const createInvoice: CreateInvoiceDTO = {
  customer: 'a4307088-2dfc-449b-9fc9-26ac8fde6e98',
  invoiceNo: 'invoice001',
  paymentStatus: PaymentStatus.NOT_PAID,
  description: 'Invoice for dracik',
  currency: Currency.EUR,
  taxRate: 19,
  issueDate: new Date(),
  dueDate: new Date(),
  note: 'Leave money at the reception',
  items: [
    {
      description: 'Hracka decka',
      rate: 5,
      quantity: 4,
    },
    {
      description: 'Lopta',
      rate: 3,
      quantity: 11,
    },
  ],
};

describe('Invoice Controller', () => {
  let invoiceController: InvoiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceController],
      providers: [
        {
          provide: InvoiceService,
          useFactory: () => ({
            create: jest.fn((invoice: CreateInvoiceDTO) => ({})),
          }),
        },
        { provide: CustomerService, useValue: {} },
      ],
    }).compile();

    invoiceController = app.get<InvoiceController>(InvoiceController);
  });

  //const invoiceSpy = jest.spyOn(invoiceController, 'createInvoice');

  it('Create invoice tests', async () => {
    const result = await invoiceController.createInvoice(createInvoice);
    //expect(invoiceSpy).toHaveBeenCalledWith(createInvoice);
    //expect(invoiceSpy).toHaveBeenCalledTimes(1);
    expect(result.customer).toEqual('a4307088-2dfc-449b-9fc9-26ac8fde6e98');
  });
});
