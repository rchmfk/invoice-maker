import InvoiceList from "@/components/Invoice/InvoiceList";
import InvoiceOption from "@/components/Invoice/InvoiceOption";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function InvoiceAdminPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 space-y-6 flex flex-col py-6 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Invoice
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
            <Link
              href=""
              className="mt-2 flex items-center text-sm text-gray-500"
            >
              Menu
            </Link>
            <Link
              href=""
              className="mt-2 flex items-center text-sm text-gray-500"
            >
              <ChevronRightIcon
                aria-hidden="true"
                className="mr-2 size-5 shrink-0 text-gray-400"
              />
              Sub Menu
            </Link>
            <Link
              href=""
              className="mt-2 flex items-center text-sm text-gray-500"
            >
              <ChevronRightIcon
                aria-hidden="true"
                className="mr-2 size-5 shrink-0 text-gray-400"
              />
              Sub Menu
            </Link>
          </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3">
            <Link
            href={"/admin/create-invoice"}
              type="button"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
              Create Invoice
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col rounded-lg outline-none bg-white shadow-[4px_4px_24px_4px_rgba(0,0,0,0.1)] gap-2">
        <InvoiceOption />
        <InvoiceList />
        {/* Pagination */}
      </div>
    </section>
  );
}

