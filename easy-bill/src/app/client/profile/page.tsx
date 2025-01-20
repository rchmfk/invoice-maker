import { ChevronRightIcon, PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const ClientProfile = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="mb-4 lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Profile
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-2">
                <Link
                  href="/admin"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/profile"
                  className="mt-2 flex items-center text-sm text-gray-500"
                >
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="mr-2 size-5 shrink-0 text-gray-400"
                  />
                  Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 rounded bg-gray-50">
            <div className="flex flex-col rounded-lg bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.05)] gap-2 w-full">
              {/* Pagination */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
