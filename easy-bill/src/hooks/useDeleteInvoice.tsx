import { db } from '@/services/firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export default async function useDeleteInvoice(id: string) {
    const invoiceRef = doc(db, "invoices", id);
  
    try {
      await deleteDoc(invoiceRef);
      console.log(`Invoice with ID ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting invoice: ", error);
    }
  }