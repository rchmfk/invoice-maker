"use client";

import { useOutsideClick } from "@/hooks/useOutsideClickEvent";
import { paymentOption, salesPersonOption } from "@/public/DummtData";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type Name = {
  name: string;
};

const InvoiceOption = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [toogleSalesPersonOption, setToogleSalesPersonOption] =
    useState<boolean>(false);
  const [tooglePaymentOption, setTooglePaymentOption] =
    useState<boolean>(false);
  const [salesPerson, setSalesPerson] = useState<Name>({
    name: searchParams.get("salesPerson") || "All",
  });
  const [paymentProcess, setPaymentProcess] = useState<Name>({
    name: searchParams.get("paymentProcess") || "All",
  });
  const [searchInvoice, setSearchInvoice] = useState(
    searchParams.get("searchInvoice") || ""
  );

  const salesPersonOptionRef = useOutsideClick(() =>
    setToogleSalesPersonOption(false)
  );
  const paymentOptionRef = useOutsideClick(() => setTooglePaymentOption(false));

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const handleSalesPersonChange = (name: string) => {
    setSalesPerson({ name });
    updateSearchParams("salesPerson", name);
  };

  const handlePaymentProcessChange = (name: string) => {
    setPaymentProcess({ name });
    updateSearchParams("paymentProcess", name);
  };

  const handleSearchChange = (value: string) => {
    setSearchInvoice(value);
    updateSearchParams("client", value);
  };

  return (
    <div className="">
      <div className="flex gap-3 p-8">
        {/* Sales Person */}
        <div
          className="relative border border-black/20 min-w-32 text-center rounded-lg py-4 px-3 hover:border-black/30 transition flex items-center justify-around cursor-pointer"
          ref={salesPersonOptionRef}
          onClick={() => setToogleSalesPersonOption((prev) => !prev)}
        >
          <p className="px-px absolute text-sm left-5 bg-white -top-2.5 font-semibold text-black/50">
            Sales Person
          </p>
          <p>{salesPerson.name}</p>
          <ChevronDownIcon
            className={`size-5 transition ${
              toogleSalesPersonOption ? "rotate-180" : ""
            }`}
          />
          {toogleSalesPersonOption && (
            <div className="absolute bg-white top-[57px] overflow-hidden flex flex-col rounded-lg border-black/20 border w-full">
              {salesPersonOption.map((person: Name) => (
                <button
                  key={person.name}
                  className="text-sm hover:bg-gray-100 py-1"
                  onClick={() => handleSalesPersonChange(person.name)}
                >
                  {person.name}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Payment Process */}
        <div
          className="relative border border-black/20 min-w-32 max-w-44 text-center rounded-lg py-4 px-3 hover:border-black/30 transition flex items-center justify-around cursor-pointer"
          ref={paymentOptionRef}
          onClick={() => setTooglePaymentOption((prev) => !prev)}
        >
          <p className="px-px absolute text-sm left-4 bg-white -top-2.5 font-semibold text-black/50">
            Payment
          </p>
          <p>{paymentProcess.name}</p>
          <ChevronDownIcon
            className={`size-5 transition ${
              tooglePaymentOption ? "rotate-180" : ""
            }`}
          />
          {tooglePaymentOption && (
            <div className="absolute bg-white top-[57px] overflow-hidden flex flex-col rounded-lg border-black/20 border w-full">
              {paymentOption.map((process: Name) => (
                <button
                  key={process.name}
                  className="text-sm hover:bg-gray-100 py-1"
                  onClick={() => handlePaymentProcessChange(process.name)}
                >
                  {process.name}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Search Invoice */}
        <div className="w-full relative">
          <input
            type="text"
            className="w-full py-4 border border-black/20 rounded-lg pl-12 pr-4"
            placeholder="Search..."
            required
            value={searchInvoice}
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

export default InvoiceOption;
