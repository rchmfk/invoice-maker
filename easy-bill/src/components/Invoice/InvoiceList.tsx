"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClickEvent";
import { invoiceData } from "@/public/DummtData";
import {
  formatBackgroundPayment,
  formatInvoiceId,
  formatNumber,
} from "@/utils/formating";
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import ModalDeleteInvoiceAdmin from "../modal/ModalDeleteInvoiceAdmin";

const InvoiceList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showOptions, setShowOptions] = useState<number | null>(null);
  const [invoices, setInvoices] = useState(invoiceData);
  const [showDeleteInvoiceModal, setShowDeleteInvoiceModal] = useState(false);
  const [invoiceId, setInvoiceId] = useState<number | null>(null)
  const showOptionsRef = useOutsideClick(() => setShowOptions(null));

  const paymentProcess = searchParams.get("paymentProcess") || "";
  const salesPerson = searchParams.get("salesPerson") || "";
  const client = searchParams.get("client") || "";

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesPaymentProcess =
      !paymentProcess ||
      paymentProcess === "All" ||
      invoice.paymentProcess.toLowerCase() === paymentProcess.toLowerCase();
    const matchesSalesPerson =
      !salesPerson ||
      invoice.salesPerson.toLowerCase().includes(salesPerson.toLowerCase());
    const matchesClient =
      !client || invoice.client.toLowerCase().includes(client.toLowerCase());

    return salesPerson === "All"
      ? invoice && matchesPaymentProcess && matchesClient
      : matchesPaymentProcess && matchesSalesPerson && matchesClient;
  });

  const toggleOptions = (index: number) => {
    setShowOptions(showOptions === index ? null : index);
  };

  const handleEditInvoice = (invoiceId: number) => {
    router.push(`/admin/update-invoice/${invoiceId}`)
  };

  const handleDeleteInvoice = (invoiceId: number) => {
    if(invoiceId !== null) {
      setInvoices((prevInvoices) =>
        prevInvoices.filter((invoice) => invoice.invoiceId !== invoiceId)
      );
      setShowOptions(null);
    }
  };

  return (
    <>
      <ModalDeleteInvoiceAdmin
        handleDelete={handleDeleteInvoice}
        selectedInvoiceId={invoiceId}
        setInvoiceId={setInvoiceId}
        showDeleteInvoiceModal={showDeleteInvoiceModal}
        setShowDeleteInvoiceModal={setShowDeleteInvoiceModal}
      />
      <div className="flex gap-3">
        <div className="pb-4 flex-1">
          <div className="grid px-6 mb-2 text-gray-600 grid-cols-[repeat(14,_minmax(0,_1fr));] w-full space-y-4 items-end gap-2 bg-gray-100 pb-4">
            <div className="flex col-span-2 items-center gap-6">
              <input type="checkbox" className="w-5 h-5" readOnly />
              <div>#</div>
            </div>
            <div className="col-span-2">Invoice No</div>
            <div className="col-span-2">Client</div>
            <div className="col-span-2">Total</div>
            <div className="col-span-2">Sales Person</div>
            <div className="col-span-2">Payment</div>
            <div className="col-span-2">
              <button>Document</button>
            </div>
          </div>
          {filteredInvoices.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              No invoices found. Please adjust your filters.
            </div>
          ) : (
            filteredInvoices.map((invoice, index) => {
              const paymentBackground = formatBackgroundPayment(
                invoice.paymentProcess)
              return (
                (
                  <div
                    key={index}
                    className="grid px-6 mb-2 grid-cols-[repeat(14,_minmax(0,_1fr));] pb-5 w-full space-y-4 items-end gap-2"
                  >
                    <div className="flex items-center gap-6 col-span-2">
                      <input type="checkbox" className="w-5 h-5" readOnly />
                      <div>{index + 1}</div>
                    </div>
                    <div className="col-span-2">
                      {formatInvoiceId(invoice.invoiceId)}
                    </div>
                    <div className="col-span-2">{invoice.client}</div>
                    <div className="col-span-2">{formatNumber(invoice.total)}</div>
                    <div className="col-span-2">{invoice.salesPerson}</div>
                    <div className="col-span-2 flex items-center justify-center">
                      <p
                        className={`capitalize tracking-wide text-sm rounded-lg px-2 ${paymentBackground}  py-1`}
                      >
                        {invoice.paymentProcess}
                      </p>
                    </div>
                    <div className="flex justify-around items-center col-span-2">
                      <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-lg px-2 py-px">
                        View
                      </button>
                      <button onClick={() => toggleOptions(index)}>
                        <EllipsisVerticalIcon className="size-5 hover:text-blue-500" />
                      </button>
                      {showOptions === index && (
                        <div
                          ref={showOptionsRef}
                          className="absolute bg-white outline-none shadow-lg rounded-lg -mt-20"
                        >
                          <button
                            className="px-4 py-2 flex items-center gap-2 w-full text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg"
                            onClick={() => handleEditInvoice(invoice.invoiceId)}
                          >
                            <PencilIcon className="size-4" />
                            <span>Edit</span>
                          </button>
                          <button
                            className="px-4 w-full py-2 flex items-center gap-2 text-sm text-red-500 hover:bg-gray-100"
                            onClick={() => {
                              setShowDeleteInvoiceModal(prev => !prev)
                              setInvoiceId(invoice.invoiceId)
                            }}
                          >
                            <TrashIcon className="size-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )
            })
          )}
        </div>
      </div>
    </>
  );
};

export default InvoiceList;
