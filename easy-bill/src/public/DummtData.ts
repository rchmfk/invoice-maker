import { InputFieldKey } from "@/typescript/entities/FormInvoice";

export const invoiceData = [
  {
    invoiceId: 1,
    client: "Alice Johnson",
    total: 1300000,
    salesPerson: "Oscar",
    paymentProcess: "paid",
  },
  {
    invoiceId: 2,
    client: "Smith",
    total: 2300000,
    salesPerson: "Oscar",
    paymentProcess: "process",
  },
  {
    invoiceId: 3,
    client: "Bob",
    total: 3300000,
    salesPerson: "Oscar",
    paymentProcess: "proceed to client",
  },
  {
    invoiceId: 4,
    client: "Ethan Hunt",
    total: 4300000,
    salesPerson: "Oscar",
    paymentProcess: "process",
  },
  {
    invoiceId: 5,
    client: "Fiona Apple",
    total: 5300000,
    salesPerson: "Oscar",
    paymentProcess: "pending",
  },
  {
    invoiceId: 6,
    client: "George Clooney",
    total: 6300000,
    salesPerson: "Oscar",
    paymentProcess: "paid",
  },
  {
    invoiceId: 7,
    client: "Hannah Montana",
    total: 7300000,
    salesPerson: "Oscar",
    paymentProcess: "paid",
  },
  {
    invoiceId: 8,
    client: "Ian Malcolm",
    total: 8300000,
    salesPerson: "Oscar",
    paymentProcess: "paid",
  },
];

export const salesPersonOption = [
  { name: "All" },
  { name: "Oscar" },
  { name: "Rachma" },
  { name: "Firman" },
];
export const paymentOption = [
  { name: "All" },
  { name: "Process" },
  { name: "Paid" },
  { name: "Pending" },
];


export const inputFields: {
    id: InputFieldKey;
    label: string;
    type: string;
    placeholder: string;
    rows?: number;
    required: boolean;
  }[] = [
    {
      id: "invoiceNo",
      label: "No",
      type: "text",
      placeholder: "INV/2025/0001",
      required: true,
    },
    {
      id: "date",
      label: "Date",
      type: "date",
      placeholder: "",
      required: true,
    },
    {
      id: "salesPerson",
      label: "Sales Person",
      type: "text",
      placeholder: "Alice",
      required: true,
    },
    {
      id: "terms",
      label: "Terms",
      type: "text",
      placeholder: "Net 7 Days",
      required: true,
    },
    {
      id: "currency",
      label: "Currency",
      type: "text",
      placeholder: "Dollar (USD)",
      required: true,
    },
    {
      id: "dueDate",
      label: "Due Date",
      type: "date",
      placeholder: "",
      required: true,
    },
    {
      id: "client",
      label: "Client",
      type: "text",
      placeholder: "John Wick",
      required: true,
    },
    {
      id: "contactPerson",
      label: "Contact Person",
      type: "text",
      placeholder: "John Doe",
      required: true,
    },
    {
      id: "notes",
      label: "Notes",
      type: "textarea",
      placeholder: "Notes",
      rows: 5,
      required: true,
    },
    {
      id: "termsAndCondition",
      label: "Terms & Conditions",
      type: "textarea",
      placeholder: "Terms & Conditions",
      rows: 5,
      required: true,
    },
  ];