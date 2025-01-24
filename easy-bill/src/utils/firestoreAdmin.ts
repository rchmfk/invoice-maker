import { db } from "@/services/firebase"; // Make sure to import your Firebase setup
import { doc, getDoc } from "firebase/firestore";

// Function to fetch invoice data
export const getInvoiceData = async (invoiceId: string) => {
  const invoiceRef = doc(db, "invoices", invoiceId); // Assuming you have an "invoices" collection
  const invoiceSnap = await getDoc(invoiceRef);
  if (invoiceSnap.exists()) {
    return invoiceSnap.data();
  } else {
    console.log("No such invoice!");
    return null;
  }
};

// Function to fetch client data
export const getClientData = async (clientId: string) => {
  const clientRef = doc(db, "clients", clientId); // Assuming you have a "clients" collection
  const clientSnap = await getDoc(clientRef);
  if (clientSnap.exists()) {
    return clientSnap.data();
  } else {
    console.log("No such client!");
    return null;
  }
};

// Function to fetch payment data
export const getPaymentData = async (paymentId: string) => {
  const paymentRef = doc(db, "payments", paymentId); // Assuming you have a "payments" collection
  const paymentSnap = await getDoc(paymentRef);
  if (paymentSnap.exists()) {
    return paymentSnap.data();
  } else {
    console.log("No such payment data!");
    return null;
  }
};

// Function to fetch table data (items or other details)
export const getTableData = async (tableId: string) => {
  const tableRef = doc(db, "tables", tableId); // Assuming you have a "tables" collection
  const tableSnap = await getDoc(tableRef);
  if (tableSnap.exists()) {
    return tableSnap.data();
  } else {
    console.log("No such table data!");
    return null;
  }
};