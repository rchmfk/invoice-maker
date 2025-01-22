import FormInvoice from '@/components/Invoice/FormInvoice'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function UpdateInvoice({ params }: {params: {id: string }}) {
  console.log(params.id);
  
  return (
    <section className="mx-auto max-w-7xl px-4 space-y-6 flex flex-col py-6 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Update Invoice
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
      </div>
      <div>
        <FormInvoice />
      </div>
    </section>
  )
}
