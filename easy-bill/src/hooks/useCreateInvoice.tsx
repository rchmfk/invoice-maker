import { auth, db } from "@/services/firebase";
import { InvoiceFormValues } from "@/typescript/entities/FormInvoice";
import { formatNumber } from "@/utils/formating";
import { addDoc, collection } from "firebase/firestore";

export default async function useCreateInvoice(invoiceData: InvoiceFormValues) {
  const collectionInvoiceRef = collection(db, "invoices");

  const totalItems = invoiceData.items.reduce((acc, item: any) => {
    const price = parseFloat(item.price);
    const quantity = parseInt(item.quantity, 10);
    const discount = parseFloat(item.discount) / 100;
    const itemTotal = price * quantity - price * quantity * discount;
    return acc + itemTotal;
  }, 0);

  const discount = parseFloat(invoiceData.additionalDiscount || "0");

  const total =
    totalItems - discount + parseFloat(invoiceData.shippingCost || "0");

  const invoiceJSON = {
    invoiceNo: invoiceData.invoiceNo,
    date: invoiceData.date,
    salesPerson: invoiceData.salesPerson,
    currency: invoiceData.currency,
    client: invoiceData.client,
    dueDate: invoiceData.dueDate,
    contactPerson: invoiceData.contactPerson,
    terms: invoiceData.terms,
    notes: invoiceData.notes,
    termsAndCondition: invoiceData.termsAndCondition,
    shippingCost: formatNumber(invoiceData.shippingCost),
    discount: formatNumber(String(discount)),
    total: formatNumber(String(total)),
    paymentProof: "process",
    clientId: auth?.currentUser?.uid,
    status: "drafted",
    salesPersonId: null,
    accountId: null,
    template: {
      head: null,
      clientInfo: null,
      table: null,
      paymentInfo: null,
    },
  };

  try {
    const docRef = await addDoc(collectionInvoiceRef, invoiceJSON);
    
    return docRef.id;
  } catch (error) {
    console.error("Error creating invoice: ", error);
  }
}
