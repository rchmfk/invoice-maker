import Label from "@/components/Label";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Payment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedStepPage = searchParams.get("step") as string;
  const selectedHeadTemplate = searchParams.get("head") as string;
  const selectedClientInfo = searchParams.get("client") as string;
  const selectedTableInfo = searchParams.get("table") as string;
  const selectedPaymentInfo = searchParams.get("payment") as string;
  const selectedInvoiceId = searchParams.get("invoiceId") as string;
  

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
  
    const queryParams = new URLSearchParams();
  
    if (selectedStepPage) queryParams.append("step", selectedStepPage);
    if (selectedHeadTemplate) queryParams.append("head", selectedHeadTemplate);
    if (selectedClientInfo) queryParams.append("client", selectedClientInfo);
    if (selectedTableInfo) queryParams.append("table", selectedTableInfo);
    if (selectedValue) queryParams.append("payment", selectedValue);
    if (selectedInvoiceId) queryParams.append("invoiceId", selectedInvoiceId);

  
    router.push(`?${queryParams.toString()}`, { scroll: false });
  };
  

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Select Payment Info Template
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Classic Client Template */}
        <Label
          id="paymentInfo"
          name="templatePaymentInfo"
          value="classic"
          selectedValue={selectedPaymentInfo}
          onChange={handleRadioChange}
        >
          <div className="flex items-end p-4 justify-between">
            <div className="w-full">
              <h2 className="font-semibold">Thank you for the business!</h2>
              <p className="text-gray-500">Please pay within 15 days of receiving this invoice</p>
            </div>
            <div className="flex flex-col w-full text-gray-500 py-2 px-4 bg-blue-50 rounded-xl">
              <h2 className="font-semibold text-black">Payment details</h2>
              <p>ABCD BANK</p>
              <p>SWIFT: ABCDUSBBXXX</p>
              <p>Acct #37447892300011</p>
              <div className="flex gap-4 border-t-2 pt-2 border-white items-center">
                <p>+91 00000 00000 &nbsp; <span className="text-gray-300">|</span></p>
                <p>hello@gmail.com</p>
              </div>
            </div>
          </div>
        </Label>
        <Label
          id="modernPaymentInfo"
          name="templatePaymentInfo"
          value="modern"
          selectedValue={selectedPaymentInfo}
          onChange={handleRadioChange}
        >
         <div className="flex flex-col flex-1 gap-4 p-4">
            <h2>Thank you for the business!</h2>
            
            <div className="flex items-center">
              <p className="text-gray-500  max-w-[108px] w-full text-sm">PAYMENT INFO</p>
              <div className="h-[2px] w-full bg-gray-200"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <h2>ACCOUNT NAME</h2>
                <p className="text-sm text-gray-500">Business address, City, IN - 000 000</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-1">
                  <h2>Bank name</h2>
                  <p className="text-sm text-gray-500">ABCD BANK</p>
                </div>
                <div className="w-[2px] h-8 bg-gray-300"></div>
                <div className="flex flex-col gap-1">
                  <h2>Swift code</h2>
                  <p className="text-sm text-gray-500">ABCDUSBBXXX</p>
                </div>
                <div className="w-[2px] h-8 bg-gray-300"></div>
                <div className="flex flex-col gap-1">
                  <h2>Account #</h2>
                  <p className="text-sm text-gray-500">37474892300011</p>
                </div>
              </div>
            </div>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default Payment;
