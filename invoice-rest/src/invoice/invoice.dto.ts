import { PaymentStatus, Currency, Item } from "./invoice.model";

class ItemDTO{
    id: string;
    quantity: number
}

export class CreateInvoiceDTO{
customer: string;
invoiceNo: string;
paymentStatus: PaymentStatus;
description: string;
currency: Currency;
taxRate: number;
issueDate: Date;
dueDate: Date;
note: string;
items: Array<Item>;
}
