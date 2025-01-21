import { z } from "zod";

export const invoiceSchema = z.object({
    invoiceNo: z.string().nonempty("Invoice number is required"),
    date: z.string().nonempty("Date is required"),
    maker: z.string().nonempty("Maker is required"),
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
          description: z.string().optional(),
          quantity: z.number().min(1, "Quantity must be at least 1"),
          discount: z.string().min(0, "Discount must be 0 or greater"),
          price: z.number().min(0, "Price must be 0 or greater"),
        })
      )
      .min(1, "At least one item is required"),
  });


export type InvoiceFormValues = z.infer<typeof invoiceSchema>;