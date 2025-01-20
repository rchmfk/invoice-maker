import {
    ChevronRightIcon,
    PlusIcon,
  } from "@heroicons/react/20/solid";
  import Link from "next/link";
  
  const Payment = () => {
    return (
      <>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Payment
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
                  <Link href="" className="mt-2 flex items-center text-sm text-gray-500">
                    Menu
                  </Link>
                  <Link href="" className="mt-2 flex items-center text-sm text-gray-500">
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="mr-2 size-5 shrink-0 text-gray-400"
                    />
                    Sub Menu
                  </Link>
                </div>
              </div>
              <div className="mt-5 flex lg:ml-4 lg:mt-0">
                
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };
  
  export default Payment;