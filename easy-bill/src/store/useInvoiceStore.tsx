import { create } from 'zustand';

export interface InvoiceData {
  invoiceNo: string;
  date: string;
  salesPerson: string;
  currency: string;
  client: string;
  dueDate: string;
  contactPerson: string;
  terms: string;
  notes: string;
  termsAndCondition: string;
  items: { item: string; description: string; quantity: string; discount: string; price: string }[] | any[]
  shippingCost: string;
  invoiceId?: string | null | any
}

interface InvoiceStore {
  invoiceData: InvoiceData | null;
  setInvoiceData: (data: InvoiceData) => void;
}

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoiceData: null,
  setInvoiceData: (data) => set({ invoiceData: data }),
}));
