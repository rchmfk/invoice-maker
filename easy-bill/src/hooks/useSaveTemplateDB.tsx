import { db } from "@/services/firebase";
import { doc, updateDoc } from "firebase/firestore";

type SaveTemplateProps = {
  head: string;
  clientInfo: string;
  table: string;
  paymentInfo: string;
  invoiceId: string | null;
};

export default async function useSaveTemplateDB({
  head,
  clientInfo,
  table,
  paymentInfo,
  invoiceId,
}: SaveTemplateProps) {
  if (!invoiceId) {
    console.error("Invoice ID is required.");
    return;
  }

  const invoiceRef = doc(db, "invoices", invoiceId);

  const templateData = {
    template: {
      head,
      clientInfo,
      table,
      paymentInfo,
    },
  };

  try {
    await updateDoc(invoiceRef, templateData);
  } catch (error) {
    console.error("Error saving template: ", error);
  }
}
