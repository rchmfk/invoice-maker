import { z } from "zod";

export const invoiceSchema = z.object({
    invoiceNo: z.string().nonempty("Invoice number is required"),
    date: z.string().nonempty("Date is required"),
    salesPerson: z.string().nonempty("Sales Person is required"),
    terms: z.string().nonempty("Terms is required"),
    currency: z.string().nonempty("Currency is required"),
    client: z.string().nonempty("Client is required"),
    dueDate: z.string().nonempty("Due date is required"),
    contactPerson: z.string().nonempty("Contact person is required"),
    termsAndCondition: z.string().nonempty("Terms and conditions are required"),
    notes: z.string().nonempty("Notes are required"),
    additionalDiscount: z.string().regex(/^\d*$/, "Shipping cost must contain only numbers").optional(),
    shippingCost: z.string().regex(/^\d*$/, "Shipping cost must contain only numbers").nonempty("Shipping cost is required"),
    items: z
      .array(
        z.object({
          item: z.string().nonempty("Item name is required"),
          description: z.string().nonempty("Description is required"),
          quantity: z.string().nonempty("Quantity is required"),
          discount: z.string().nonempty("Discount is required"),
          price: z.string().nonempty("Price is required"),
        })
      )
      .min(1, "At least one item is required"),
  });


export type InvoiceFormValues = z.infer<typeof invoiceSchema>;

export type InputFieldKey = keyof {
  invoiceNo: string;
  date: string;
  salesPerson: string;
  terms: string;
  currency: string;
  client: string;
  dueDate: string;
  contactPerson: string;
  termsAndCondition: string;
  notes: string;
  shippingCost: string;
  items: { price: string; quantity: string; discount: string }[];
  additionalDiscount?: string;
};

export interface InvoiceDataDb {
  accountId: string | null;
  client: string;
  clientId: string | null;
  contactPerson: string;
  currency: string;
  date: string;
  discount: string;
  dueDate: string;
  invoiceNo: string;
  notes: string;
  paymentProof: string | null;
  salesPerson: string;
  salesPersonId: string | null;
  shippingCost: string;
  template: {
    clientInfo: string;
    head: string;
    paymentInfo: string;
    table: string;
  };
  terms: string;
  termsAndCondition: string;
  total: string;
}