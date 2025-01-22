import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Heading: React.FC = () => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard
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
          </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
              Add
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Heading;
