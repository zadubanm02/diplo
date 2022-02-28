import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// # ------------------------------------------------------
// # THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
// # ------------------------------------------------------

// type Item {
//   description: String!
//   rate: Float!
//   quantity: Float!
// }

// type InvoiceModel {
//   id: String!
//   invoiceNo: String!
//   description: String!
//   customer: CustomerModel!
//   paymentStatus: String!
//   currency: String!
//   taxRate: Float!
//   issueDate: String!
//   dueDate: String!
//   note: String!
//   Items: [Item!]!
//   taxAmount: Float!
//   subTotal: Float!
//   total: String!
//   amountPaid: Float!
//   outstandingBalance: Float!
//   createdAt: DateTime!
//   updatedAt: DateTime!
// }

// """
// A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
// """
// scalar DateTime

// type CustomerModel {
//   id: String!
//   name: String!
//   email: String!
//   phone: String!
//   address: String!
//   invoices: [InvoiceModel!]
//   created_at: DateTime!
//   updated_at: DateTime!
// }

// type Query {
//   customer(id: String!): CustomerModel!
//   customers: [CustomerModel!]!
//   invoice(id: String!): InvoiceModel!
//   invoices: [InvoiceModel!]!
// }

// type Mutation {
//   createCustomer(address: String, phone: String, email: String!, name: String!): CustomerModel!
//   createInvoice(invoice: CreateInvoiceDTO!): InvoiceModel!
// }

// input CreateInvoiceDTO {
//   customer: String!
//   invoiceNo: String!
//   paymentStatus: String!
//   description: String!
//   currency: String!
//   taxRate: Float!
//   issueDate: DateTime!
//   dueDate: DateTime!
//   note: String!
//   items: [ItemDTO!]!
// }

// input ItemDTO {
//   description: String!
//   rate: Float!
//   quantity: Float!
// }