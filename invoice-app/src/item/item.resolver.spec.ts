// import { Test, TestingModule } from '@nestjs/testing';
// import { CustomerService } from '../customer/customer.service';
// import { ItemController } from './item.resolver';
// import { CreateItemDTO } from './item.dto';
// import {ItemModel } from './item.model';
// import { ItemService } from './item.service';

// const createItem: CreateItemDTO = {
//   name:"item",
//   description: "description",
//   rate: 3
// };

// describe('Item Controller', () => {
//   let itemController: ItemController;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [ItemController],
//       providers: [
//         {
//           provide: ItemService,
//           useFactory: () => ({
//             create: jest.fn((item: CreateItemDTO) => (item)),
//           }),
//         },
//         { provide: CustomerService, useValue: {} },
//       ],
//     }).compile();

//     itemController = app.get<ItemController>(ItemController);
//   });

//   //const invoiceSpy = jest.spyOn(invoiceController, 'createInvoice');

//   it('Create item tests', async () => {
//     const result = await itemController.createItem(createItem);
//     //expect(invoiceSpy).toHaveBeenCalledWith(createInvoice);
//     //expect(invoiceSpy).toHaveBeenCalledTimes(1);
//     expect(result.description).toEqual('description');
//   });
// });
