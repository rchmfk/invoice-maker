"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PandaBiruMuda, PandaOrange, PandaHitam } from "@/public";
import Image from "next/image";
import Label from "@/components/Label";

const Head = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedHeadTemplate = searchParams.get("head") as string;
  const selectedStepPage = searchParams.get("step") as string;
  const selectedClientInfo = searchParams.get("client") as string;
  const selectedPaymentInfo = searchParams.get("payment") as string;
  const selectedTableTemplate = searchParams.get("table") as string;
  const selectedInvoiceId = searchParams.get("invoiceId") as string;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    const queryParams = new URLSearchParams();

    if (selectedStepPage) queryParams.append("step", selectedStepPage);
    if (selectedValue) queryParams.append("head", selectedValue);
    if (selectedClientInfo) queryParams.append("client", selectedClientInfo);
    if (selectedTableTemplate)
      queryParams.append("table", selectedTableTemplate);
    if (selectedPaymentInfo) queryParams.append("payment", selectedPaymentInfo);
    if (selectedInvoiceId) queryParams.append("invoiceId", selectedInvoiceId);
    
    router.push(`?${queryParams.toString()}`, { scroll: false });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Select Invoice Head Template
      </h1>
      <div className="flex flex-col gap-6">
        {/* Classic Template */}
        <Label
          id="classic"
          name="templateHead"
          value="classic"
          selectedValue={selectedHeadTemplate}
          onChange={handleRadioChange}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={PandaBiruMuda}
                  alt="Classic Template Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-blue-500/90">
                  Panda, Inc
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Business Address</p>
              <p className="text-sm text-gray-500">City, State, IN - 000000</p>
              <p className="text-sm text-gray-500">TAX ID: 00XXXXX1234X0XX</p>
            </div>
          </div>
        </Label>

        {/* Vibrant Template */}
        <Label
          id="vibrant"
          name="templateHead"
          value="vibrant"
          selectedValue={selectedHeadTemplate}
          onChange={handleRadioChange}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={PandaOrange}
                  alt="Vibrant Template Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-orange-500">
                  Panda, Inc
                </p>
                <p className="text-sm text-gray-500">hello@email.com</p>
                <p className="text-sm text-gray-500">+91 00000 00000</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Business Address</p>
              <p className="text-sm text-gray-500">City, State, IN - 000000</p>
              <p className="text-sm text-gray-500">TAX ID: 00XXXXX1234X0XX</p>
            </div>
          </div>
        </Label>

        {/* Minimalist Template */}
        <Label
          id="minimalist"
          name="templateHead"
          value="minimalist"
          selectedValue={selectedHeadTemplate}
          onChange={handleRadioChange}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={PandaHitam}
                  alt="Minimalist Template Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-black">Panda, Inc</p>
                <p className="text-sm text-gray-500">hello@email.com</p>
                <p className="text-sm text-gray-500">+91 00000 00000</p>
              </div>
            </div>
            <div>
              <h2 className="text-[#B2B7C2] font-bold text-4xl">Invoice</h2>
              <p className="text-[#5E6470] text-sm">#AB2324-01</p>
            </div>
          </div>
        </Label>

        {/* Bold Template */}
        <Label
          id="bold"
          name="templateHead"
          value="bold"
          selectedValue={selectedHeadTemplate}
          onChange={handleRadioChange}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-800">INVOICE</h2>
              <p className="text-gray-600">#AB2324-01</p>
            </div>
            <Image
              src={PandaHitam}
              alt="Bold Template Logo"
              width={58}
              height={58}
            />
          </div>
        </Label>
        {/* Blue Logo bold */}
        <Label
          id="complex-bold"
          name="templateHead"
          value="complex-bold"
          selectedValue={selectedHeadTemplate}
          onChange={handleRadioChange}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-800">INVOICE</h2>
              <div className="mb-2">
                <h2 className="text-sm text-gray-700 mb-2">Billed to</h2>
                <p className="text-sm text-gray-800 font-semibold">
                  Company Name
                </p>
                <p className="text-sm text-gray-600">Company address</p>
                <p className="text-sm text-gray-600">City, Country - 00000</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Image
                src={PandaBiruMuda}
                alt="Bold Template Logo"
                width={58}
                height={58}
              />
              <p className="text-lg font-semibold text-blue-500/90">
                Panda, Inc
              </p>
              <p className="text-gray-500">Business address</p>
              <p className="text-gray-500">City, Country - 00000</p>
              <p className="text-gray-500">TAX ID 00XXXXX1234X0XX</p>
            </div>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default Head;
