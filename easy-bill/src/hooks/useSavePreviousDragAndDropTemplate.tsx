import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import { useRouter } from "next/navigation";

export default function useSavePreviousDragAndDropTemplate() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const selectedHeadTemplate = searchParams.get("head") as string;
  const selectedClientInfoTemplate = searchParams.get("client") as string;
  const selectedTableTemplate = searchParams.get("table") as string;
  const selectedPaymentInfoTemplate = searchParams.get("payment") as string;

  const [sections, setSections] = useState(() => {
    const savedSections = localStorage.getItem("invoiceSections");
    return savedSections
      ? JSON.parse(savedSections)
      : [
          { id: "head", label: "Header", template: selectedHeadTemplate },
          { id: "client", label: "Client Info", template: selectedClientInfoTemplate },
          { id: "table", label: "Table Info", template: selectedTableTemplate },
          { id: "payment", label: "Payment Info", template: selectedPaymentInfoTemplate },
        ];
  });

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const newSections = [...sections];
      const activeIndex = newSections.findIndex((section) => section.id === active.id);
      const overIndex = newSections.findIndex((section) => section.id === over?.id);

      const [removed] = newSections.splice(activeIndex, 1);
      newSections.splice(overIndex, 0, removed);

      setSections(newSections);

      localStorage.setItem("invoiceSections", JSON.stringify(newSections));
    }
  };

  useEffect(() => {
    localStorage.setItem("invoiceSections", JSON.stringify(sections));
  }, [sections]);

  const handleBack = () => router.back()

  return { handleDragEnd, handleBack, sections, selectedClientInfoTemplate, selectedHeadTemplate, selectedPaymentInfoTemplate, selectedTableTemplate };
}
