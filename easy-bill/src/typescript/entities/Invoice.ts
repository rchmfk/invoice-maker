interface InvoiceTemplate {
  head: string | null;
  clientInfo: string | null;
  table: string | null;
  paymentInfo: string | null;
}

export interface InvoiceJSON {
  invoiceNo: string;
  id: string;
  date: string;
  salesPerson: string;
  currency: string;
  client: string;
  dueDate: string;
  contactPerson: string;
  terms: string;
  notes: string;
  termsAndCondition: string;
  shippingCost: string;
  discount: string;
  total: string;
  paymentProof: string;
  clientId: string | null;
  status: string;
  salesPersonId: string | null;
  accountId: string | null;
  template: InvoiceTemplate;
}
