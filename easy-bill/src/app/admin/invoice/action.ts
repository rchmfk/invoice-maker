"use server"

import { db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchInvoices = async () => {
    try {
      const collectionRef = collection(db, "invoices");
      const snapshot = await getDocs(collectionRef);
      const invoiceList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return invoiceList;
    } catch (err) {
      console.error("Error fetching invoices:", err);
    }
  };