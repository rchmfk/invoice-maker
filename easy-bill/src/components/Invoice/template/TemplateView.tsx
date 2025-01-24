"use client";

import { closestCorners, DndContext } from "@dnd-kit/core";
import InvoiceCanvasClient from "./InvoiceCanvasClient";
import useSavePreviousDragAndDropTemplate from "@/hooks/useSavePreviousDragAndDropTemplate";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceCanvasPDF from "./InvoiceCanvasPDF";
import useSaveTemplateDB from "@/hooks/useSaveTemplateDB";
import { useInvoiceStore } from "@/store/useInvoiceStore";

const TemplateView = () => {
  const invoiceData = useInvoiceStore((state) => state.invoiceData as { invoiceId: string });
  const {
    handleDragEnd,
    sections,
    selectedClientInfoTemplate,
    selectedHeadTemplate,
    selectedPaymentInfoTemplate,
    selectedTableTemplate,
    handleBack,
  } = useSavePreviousDragAndDropTemplate();

  const handleSaveTemplate = () => {
    useSaveTemplateDB({
      invoiceId: invoiceData?.invoiceId,
      head: selectedHeadTemplate,
      table: selectedTableTemplate,
      paymentInfo: selectedPaymentInfoTemplate,
      clientInfo: selectedClientInfoTemplate,
    });
  };

  return (
    <div className="w-full h-auto ">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Invoice View</h1>
      </div>
      <div className="w-full h-full flex mb-4 p-6 bg-white border rounded-md">
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <InvoiceCanvasClient
            client={selectedClientInfoTemplate}
            head={selectedHeadTemplate}
            payment={selectedPaymentInfoTemplate}
            table={selectedTableTemplate}
            invoiceData={invoiceData}
            sections={sections}
          />
        </DndContext>
      </div>
      <div className="flex items-center w-full gap-4">
        <button
          type="button"
          onClick={handleBack}
          className="w-full bg-green-600 hover:bg-green-500 transition rounded-lg py-2.5 text-white"
        >
          Before
        </button>
        <button
          type="button"
          onClick={handleSaveTemplate}
          className="w-full bg-white rounded-lg py-2.5 border hover:border-green-500 hover:text-green-500 border-green-600 text-green-600"
        >
          <PDFDownloadLink
            document={
              <InvoiceCanvasPDF
                client={selectedClientInfoTemplate}
                head={selectedHeadTemplate}
                payment={selectedPaymentInfoTemplate}
                table={selectedTableTemplate}
                invoiceData={invoiceData}
                sections={sections}
              />
            }
            fileName="invoice.pdf"
          >
            Download PDF
          </PDFDownloadLink>
        </button>
      </div>
    </div>
  );
};

export default TemplateView;
