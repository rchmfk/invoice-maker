import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const AdminPage = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="mb-4 lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Dashboard
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
                <Link
                  href="/admin"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">Incomes</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">Expenses</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">Current Balance</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">Balance Statistics</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">Clients</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">Recent Transactions</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400">Incomes by Category</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
