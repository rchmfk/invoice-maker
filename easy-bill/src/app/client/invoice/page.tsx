"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "@/services/firebase"; // Import firestore
import {
  collection,
  getDocs,
} from "firebase/firestore";

interface Invoice {
  id: string;
  invoiceNo: string;
  total: string;
  status: string;
  salesPerson: string;
}

const ClientInvoice = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [salesPersons, setSalesPersons] = useState<string[]>(["All"]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSalesPerson, setSelectedSalesPerson] = useState<string>("All");
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10); 
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const paymentStatuses: string[] = ["All", "Unpaid", "Over Due", "Verification Process", "Payment Verified"];
  const itemsPerPageOptions = [10, 15, 20, 30]; 

  // Fetch invoices and sales persons from Firestore when component mounts
  useEffect(() => {
    const fetchData = async () => {
      // Fetch invoices
      const invoicesCollection = collection(db, "invoices");
      const invoiceSnapshot = await getDocs(invoicesCollection);
      const invoiceList = invoiceSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setInvoices(invoiceList as Invoice[]);

      // Fetch salespersons
      const salesPersonsCollection = collection(db, "admin_sales_person");
      const salesPersonSnapshot = await getDocs(salesPersonsCollection);
      const salesPersonList = salesPersonSnapshot.docs.map((doc) => doc.data().name);  // Assuming each document has a 'name' field
      setSalesPersons(["All", ...salesPersonList]); // Include 'All' as the first option
    };

    fetchData();
  }, []);

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearchQuery = searchQuery === "" || invoice.invoiceNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSalesPerson = selectedSalesPerson === "All" || invoice.salesPerson === selectedSalesPerson;
    const matchesPaymentStatus = selectedPaymentStatus === "All" || invoice.status === selectedPaymentStatus;

    return matchesSearchQuery && matchesSalesPerson && matchesPaymentStatus;
  });

  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  const paginatedInvoices = filteredInvoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSalesPerson("All");
    setSelectedPaymentStatus("All");
  };

  const handleProceedPayment = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-6 sm:ml-64">
      <div className="p-4 mt-14">
        {/* Header */}
        <div className="mb-4 lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl">Invoice</h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
              <Link href="/admin" className="mt-2 flex items-center text-sm text-gray-500">
                Dashboard
              </Link>
              <Link href="/admin/invoice" className="mt-2 flex items-center text-sm text-gray-500">
                <ChevronRightIcon aria-hidden="true" className="mr-2 size-5 shrink-0 text-gray-400" />
                Invoice
              </Link>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2">
            {/* Sales Person Filter */}
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700" value={selectedSalesPerson} onChange={(e) => setSelectedSalesPerson(e.target.value)}>
              {salesPersons.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>

            {/* Payment Filter */}
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700" value={selectedPaymentStatus} onChange={(e) => setSelectedPaymentStatus(e.target.value)}>
              {paymentStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 items-center">
            {/* Search Bar */}
            <input type="text" placeholder="Search..." className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 w-full lg:w-auto" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

            {/* Clear Filters Button */}
            <button onClick={clearFilters} className="px-3 py-2 text-red-500 border border-transparent rounded-md text-sm hover:text-red-600">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Items Per Page Selector */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-sm text-gray-500">Items per page:</span>
          <select
            className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Result Count */}
        <div className="mb-4 text-sm text-gray-500">{filteredInvoices.length} results found</div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs uppercase bg-gray-50 text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Invoice No
                </th>
                <th scope="col" className="px-6 py-3">
                  Sales Person
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment
                </th>
                <th scope="col" className="px-6 py-3">
                  Document
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedInvoices.map((invoice, index) => {
                // Handle empty, null, or undefined status
                const status = invoice.status ?? "Drafted"; // Default to "Drafted" if status is null or undefined
                return (
                  <tr key={invoice.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="px-6 py-4">{invoice.invoiceNo}</td>
                    <td className="px-6 py-4">{invoice.salesPerson}</td>
                    <td className="px-6 py-4">{invoice.total}</td>
                    <td className="px-6 py-4">
                      <div>
                        <span
                          className={`px-2 py-1 rounded text-xs ${status === "Unpaid"
                              ? "bg-yellow-100 text-yellow-700"
                              : status === "Over Due"
                                ? "bg-red-100 text-red-700"
                                : status === "Verification Process"
                                  ? "bg-blue-100 text-blue-700"
                                  : status === "Payment Verified"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-700" // Default style for "Drafted"
                            }`}
                        >
                          {status}
                        </span>
                        {status === "Unpaid" && (
                          <button onClick={handleProceedPayment} className="mt-3 ml-5 px-3 py-2 text-sm text-white bg-black rounded hover:bg-gray-800">
                            Proceed Payment
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-purple-700 underline">View</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <button onClick={handlePreviousPage} disabled={currentPage === 1} className={`px-3 py-1 text-sm ${currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} rounded`}>
            Previous
          </button>
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 text-sm ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} rounded`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Proceed Payment</h3>
            <p className="text-sm text-gray-600 mb-4">Attach proof of payment for this invoice below:</p>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={closePopup} className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">
                Cancel
              </button>
              <button onClick={closePopup} className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientInvoice;
