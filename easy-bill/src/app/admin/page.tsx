import {
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const AdminPage = () => {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Dashboard
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

          {/* Dashboard Grid Section */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Line Chart for Incomes */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-700">Incomes</h3>
              <div className="mt-4">[Line Chart for Incomes]</div>
            </div>

            {/* Line Chart for Expenses */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-700">Expenses</h3>
              <div className="mt-4">[Line Chart for Expenses]</div>
            </div>

            {/* Current Balance */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-700">Current Balance</h3>
              <p className="mt-4 text-2xl font-bold text-green-600">Rp 12,345</p>
            </div>
          </div>

          {/* Other Data Section */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Bar Chart for Balance Statistics */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-700">Balance Statistics</h3>
              <div className="mt-4">[Bar Chart]</div>
            </div>

            {/* List of Clients */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-700">Clients</h3>
              <ul className="mt-4 space-y-2">
                <li className="border-b pb-2">Client 1</li>
                <li className="border-b pb-2">Client 2</li>
                <li className="border-b pb-2">Client 3</li>
              </ul>
            </div>
          </div>

          {/* Transactions and Categories */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Recent Transactions */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-700">Recent Transactions</h3>
              <ul className="mt-4 space-y-2">
                <li className="border-b pb-2">Transaction 1</li>
                <li className="border-b pb-2">Transaction 2</li>
                <li className="border-b pb-2">Transaction 3</li>
              </ul>
            </div>

            {/* Incomes by Category */}
            <div className="rounded-lg bg-white p-4 shadow">
              <h3 className="text-lg font-semibold text-gray-700">Incomes by Category</h3>
              <div className="mt-4">[Pie Chart or Similar Visualization]</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminPage;