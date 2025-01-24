import Label from "@/components/Label";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Client = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedHeadTemplate = searchParams.get("head") as string;
  const selectedStepPage = searchParams.get("step") as string;
  const selectedClientInfo = searchParams.get("client") as string;
  const selectedTableInfo = searchParams.get("table") as string;
  const selectedPaymentInfo = searchParams.get("payment") as string;
  const selectedInvoiceId = searchParams.get("invoiceId") as string;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
  
    const queryParams = new URLSearchParams();
  
    if (selectedStepPage) queryParams.append("step", selectedStepPage);
    if (selectedHeadTemplate) queryParams.append("head", selectedHeadTemplate);
    if (selectedValue) queryParams.append("client", selectedValue);
    if (selectedTableInfo) queryParams.append("table", selectedTableInfo);
    if (selectedPaymentInfo) queryParams.append("payment", selectedPaymentInfo);
    if (selectedInvoiceId) queryParams.append("invoiceId", selectedInvoiceId);
    router.push(`?${queryParams.toString()}`, { scroll: false });
  };
  

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Select Client Info Template
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Classic Client Template */}
        <Label
          id="client-template-classic"
          name="templateClientInfo"
          value="classic"
          selectedValue={selectedClientInfo}
          onChange={handleRadioChange}
        >
          <div>
            <div className="mb-4">
              <h2 className="text-sm text-gray-700 mb-2">Billed to</h2>
              <p className="text-sm text-gray-800 font-semibold">
                Company Name
              </p>
              <p className="text-sm text-gray-600">Company address</p>
              <p className="text-sm text-gray-600">City, Country - 00000</p>
              <p className="text-sm text-gray-600">+0 (000) 123-4567</p>
            </div>
            <div className="flex flex-row justify-between gap-4 mb-4">
              <div className="flex items-center justify-between w-full p-4 rounded-lg bg-blue-50 gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Due date</p>
                  <p className="text-sm font-semibold text-gray-800">
                    15 Aug, 2023
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Invoice date</p>
                  <p className="text-sm font-semibold text-gray-800">
                    1 Aug, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full gap-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase">
                    Invoice number
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    #AB2324-01
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Reference</p>
                  <p className="text-sm font-semibold text-gray-800">INV-057</p>
                </div>
              </div>
            </div>
          </div>
        </Label>

        {/* Compact Client Template */}
        <Label
          id="client-template-compact"
          name="templateClientInfo"
          value="compact"
          selectedValue={selectedClientInfo}
          onChange={handleRadioChange}
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start w-full gap-4">
              <div className="mb-4">
                <h2 className="text-sm text-gray-700 mb-2">Billed to</h2>
                <p className="text-sm text-gray-800 font-semibold">
                  Company Name
                </p>
                <p className="text-sm text-gray-600">Company address</p>
                <p className="text-sm text-gray-600">City, Country - 00000</p>
                <p className="text-sm text-gray-600">+0 (000) 123-4567</p>
              </div>
              <div className="flex gap-4 flex-col">
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-gray-500">Invoice number</h2>
                  <p>#AB2324-01</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-gray-500">Reference</h2>
                  <p>INV-057</p>
                </div>
              </div>
              <div className="">
                <p>Invoice of (USD)</p>
                <h2 className="text-orange-600 text-xl font-semibold">
                  $4,950.00
                </h2>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h2 className="text-gray-500">Subject</h2>
                <p>Design System</p>
              </div>
              <div className="space-y-1">
                <h2 className="text-gray-500">Invoice date</h2>
                <p>01 Aug, 2025</p>
              </div>
              <div className="space-y-1">
                <h2 className="text-gray-500">Due date</h2>
                <p>15 Aug, 2025</p>
              </div>
            </div>
          </div>
        </Label>

        {/* Highlighted Amount Template */}
        <Label
          id="client-template-highlighted"
          name="templateClientInfo"
          value="highlighted"
          selectedValue={selectedClientInfo}
          onChange={handleRadioChange}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="mb-4">
              <h2 className="text-sm text-gray-700 mb-2 uppercase">
                Billed to
              </h2>
              <p className="text-sm text-gray-800 font-semibold">
                Company Name
              </p>
              <p className="text-sm text-gray-600">Company address</p>
              <p className="text-sm text-gray-600">City, Country - 00000</p>
              <p className="text-sm text-gray-600">+0 (000) 123-4567</p>
            </div>
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex flex-col gap-1.5">
                <p className="text-sm text-gray-600">INVOICE DATE</p>
                <p>01.08.2025</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-sm text-gray-600">DUE DATE</p>
                <p>15.08.2025</p>
              </div>
            </div>
            <div className="flex items-end flex-col gap-2 justify-end">
              <p className="text-sm">AMOUNT DUE</p>
              <div className="bg-[#E3FA7D] py-2 px-4 text-[#6735F4]">
                <p className="font-semibold text-xl">US$ 4,500.00</p>
              </div>
            </div>
          </div>
        </Label>

        {/* Three Columns Client Template */}
        <Label
          id="client-template-three-cols"
          name="templateClientInfo"
          value="three-cols"
          selectedValue={selectedClientInfo}
          onChange={handleRadioChange}
        >
          <div className="grid grid-cols-3 border-y border-black/20">
            <div className="flex flex-col  justify-center gap-6 py-6">
              <div className="">
                <h2 className="font-semibold mb-1">Issued</h2>
                <p className="text-sm">01 Aug, 2025</p>
              </div>
              <div className="">
                <h2 className="font-semibold mb-1">Due</h2>
                <p className="text-sm">15 Aug, 2025</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 py-6 border-x border-black/20 pl-8">
              <div className="text-gray-600 text-sm">
                <h2 className="font-semibold text-base text-black mb-1">
                  Billed to
                </h2>
                <p className="font-semibold">Company Name</p>
                <p>Company address</p>
                <p>City, Country - 00000</p>
                <p>+0 (000) 123-4567</p>
              </div>
            </div>
            <div className="flex flex-col pl-8 py-6 gap-6">
              <div className="text-sm">
                <h2 className="font-semibold text-base mb-1">From</h2>
                <p className=" font-semibold">Panda, Inc</p>
                <p>Business address</p>
                <p>City, Country - 00000</p>
                <p>TAX ID 00XXXXX1234X0XX</p>
              </div>
            </div>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default Client;
