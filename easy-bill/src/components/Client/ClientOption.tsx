"use client";

import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const ClientOption = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchClient, setSearchClient] = useState(
    searchParams.get("searchClient") || ""
  );

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const handleSearchChange = (value: string) => {
    setSearchClient(value);
    updateSearchParams("searchClient", value);
  };

  return (
    <div className="">
      <div className="flex gap-3 p-8">
        {/* Search Clients */}
        <div className="w-full relative">
          <input
            type="text"
            className="w-full py-4 border border-black/20 rounded-lg pl-12 pr-4"
            placeholder="Search..."
            required
            value={searchClient}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="absolute left-4 top-[16px]">
            <MagnifyingGlassIcon className="size-6 text-black/60" />
          </button>
        </div>
        <button className="ml-2">
          <EllipsisVerticalIcon className="size-7 hover:text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default ClientOption;
