import Label from "@/components/Label";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Table = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedStepPage = searchParams.get("step") as string;
  const selectedHeadTemplate = searchParams.get("head") as string;
  const selectedClientInfo = searchParams.get("client") as string;
  const selectedPaymentInfo = searchParams.get("payment") as string;
  const selectedTableTemplate = searchParams.get("table") as string;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    const queryParams = new URLSearchParams();

    if (selectedStepPage) queryParams.append("step", selectedStepPage);
    if (selectedHeadTemplate) queryParams.append("head", selectedHeadTemplate);
    if (selectedClientInfo) queryParams.append("client", selectedClientInfo);
    if (selectedValue) queryParams.append("table", selectedValue);
    if (selectedPaymentInfo) queryParams.append("payment", selectedPaymentInfo);

    router.push(`?${queryParams.toString()}`, { scroll: false });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Select Table Template
      </h1>

      <div className="grid grid-cols-1 gap-4">
        <Label
          id="classicTableTemplate"
          name="tableTemplate"
          value="classic"
          selectedValue={selectedTableTemplate}
          onChange={handleRadioChange}
        >
          <div className="w-full p-4">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left font-medium">
                    Item description
                  </th>
                  <th className="py-3 bg-blue-50 px-4 border-b text-start font-medium">
                    Qty
                  </th>
                  <th className="py-3 bg-blue-50 px-4 border-b text-center font-medium">
                    Rate
                  </th>
                  <th className="py-3 bg-blue-50 rounded-tr-2xl px-4 border-b text-end font-medium">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Sample Item 1</td>
                  <td className="py-3 px-4 bg-blue-50 border-b text-start">
                    2
                  </td>
                  <td className="py-3 px-4 bg-blue-50 border-b text-center">
                    $10.00
                  </td>
                  <td className="py-3 px-4 bg-blue-50 border-b text-end">
                    $20.00
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Sample Item 2</td>
                  <td className="py-3 px-4 bg-blue-50 border-b text-start">
                    1
                  </td>
                  <td className="py-3 px-4 bg-blue-50 border-b text-center">
                    $15.00
                  </td>
                  <td className="py-3 px-4 bg-blue-50 border-b text-end">
                    $15.00
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 bg-blue-50 text-start">Subtotal</td>
                  <td className="py-3 px-4 bg-blue-50 text-center"></td>
                  <td className="py-3 px-4 bg-blue-50 text-end">$35.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 bg-blue-50 text-start">Tax (10%)</td>
                  <td className="py-3 px-4 bg-blue-50 text-center"></td>
                  <td className="py-3 px-4 bg-blue-50 text-end">$3.50</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 bg-blue-50 text-start rounded-bl-2xl">
                    Total
                  </td>
                  <td className="py-3 px-4 bg-blue-50 text-center"></td>
                  <td className="py-3 px-4 rounded-br-2xl bg-blue-50 text-end">
                    $38.50
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={3.25} className="mr-auto text-center">
                    <button className="bg-blue-500 hover:bg-blue-600 flex justify-between items-center text-white w-full py-4 px-4 rounded-full">
                      <p>Total Due</p>
                      <span className="font-semibold">US$ 38,50.00</span>
                    </button>
                    <p className="mt-1 text-sm text-gray-500">
                      USD Four Thousand Nine Hundred Fifty Only.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Label>
        <Label
          id="modernTableTemplate"
          name="tableTemplate"
          value="modern"
          selectedValue={selectedTableTemplate}
          onChange={handleRadioChange}
        >
          <div className="w-full p-4">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="py-3  uppercase px-4 border-b text-left font-medium">
                    Item Detail
                  </th>
                  <th className="py-3  uppercase  px-4 border-b text-left font-medium">
                    Qty
                  </th>
                  <th className="py-3  uppercase  px-4 border-b text-center font-medium">
                    Rate
                  </th>
                  <th className="py-3  uppercase px-4 border-b text-right font-medium">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 space-y-2">
                    <h2 className="font-semibold">Item Name</h2>
                    <p className="text-gray-500">Item description</p>
                  </td>
                  <td className="py-3 px-4  text-left">2</td>
                  <td className="py-3 px-4  text-center">$10.00</td>
                  <td className="py-3 px-4  text-right">$20.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 space-y-2 border-b">
                    <h2 className="font-semibold">Item Name</h2>
                    <p className="text-gray-500">Item description</p>
                  </td>
                  <td className="py-3 px-4  border-b text-left">1</td>
                  <td className="py-3 px-4  border-b text-center">$15.00</td>
                  <td className="py-3 px-4  border-b text-right">$15.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4  text-start">Subtotal</td>
                  <td className="py-3 px-4  text-center"></td>
                  <td className="py-3 px-4  text-end">$35.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 border-b  text-start">Tax (10%)</td>
                  <td className="py-3 px-4 border-b  text-center"></td>
                  <td className="py-3 px-4  border-b text-end">$3.50</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 "></td>
                  <td className="py-3 px-4 text-start">Total</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 text-end">$38.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Label>
        <Label
          id="secondaryTableTemplate"
          name="tableTemplate"
          value="secondary"
          selectedValue={selectedTableTemplate}
          onChange={handleRadioChange}
        >
          <div className="w-full p-4">
            <h2 className="text-lg font-semibold mb-4">
              Digital product design
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="py-3 text-left font-medium border-b">#</th>
                  <th className="py-3 px-4 text-left font-medium border-b">
                    TITLE / DESCRIPTION
                  </th>
                  <th className="py-3 px-4 text-right font-medium border-b">
                    SUBTOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3">1</td>
                  <td className="py-3 px-4 border-b">
                    <p className="font-medium">Service name</p>
                    <p className="text-gray-500">01 Jul - 20 Jul • Hours log</p>
                  </td>
                  <td className="py-3 px-4 text-right border-b">$3,000.00</td>
                </tr>
                <tr>
                  <td className="py-3 border-b">2</td>
                  <td className="py-3 px-4 border-b">
                    <p className="font-medium">Service name</p>
                    <p className="text-gray-500">21 Jul - 31 Jul</p>
                  </td>
                  <td className="py-3 px-4 text-right border-b">$1,500.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="py-3 px-4 font-medium">Total</td>
                  <td className="py-3 px-4 text-right font-semibold">
                    $4,500.00
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-sm flex items-center gap-1 text-gray-500">
              <span>&#x201F;</span>Please pay within 15 days of receiving this
              invoice.
            </p>
          </div>
        </Label>
        <Label
          id="service-highlightedTableTemplate"
          name="tableTemplate"
          value="service-highlighted"
          selectedValue={selectedTableTemplate}
          onChange={handleRadioChange}
        >
          <div className="w-full p-4">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="py-3  uppercase px-4 border-b text-left font-medium">
                    Service
                  </th>
                  <th className="py-3  uppercase  px-4 border-b text-left font-medium">
                    Qty
                  </th>
                  <th className="py-3  uppercase  px-4 border-b text-center font-medium">
                    Rate
                  </th>
                  <th className="py-3  uppercase px-4 border-b text-right font-medium">
                    Line total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 space-y-2">
                    <h2 className="font-semibold">Service name</h2>
                    <p className="text-gray-500">Description</p>
                  </td>
                  <td className="py-3 px-4  text-left">2</td>
                  <td className="py-3 px-4  text-center">$10.00</td>
                  <td className="py-3 px-4  text-right">$20.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 space-y-2 border-b">
                    <h2 className="font-semibold">Service name</h2>
                    <p className="text-gray-500">Description</p>
                  </td>
                  <td className="py-3 px-4  border-b text-left">1</td>
                  <td className="py-3 px-4  border-b text-center">$15.00</td>
                  <td className="py-3 px-4  border-b text-right">$15.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4  text-start">Subtotal</td>
                  <td className="py-3 px-4  text-center"></td>
                  <td className="py-3 px-4  text-end">$35.00</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4  text-start">Tax (10%)</td>
                  <td className="py-3 px-4  text-center"></td>
                  <td className="py-3 px-4  text-end">$3.50</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 mt-1"></td>
                  <td className="py-3 px-4 mt-1 border-y-[3px] border-purple-400 text-purple-500 text-start font-semibold">
                    Amount due
                  </td>
                  <td className="py-3 px-4 mt-1 border-y-[3px] border-purple-400 text-purple-500"></td>
                  <td className="py-3 px-4 mt-1 border-y-[3px] border-purple-400 text-purple-500 text-end font-semibold">
                    $38.50
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Label>
        <Label
          id="complex"
          name="tableTemplate"
          value="complex"
          selectedValue={selectedTableTemplate}
          onChange={handleRadioChange}
        >
          <div className="flex justify-between min-h-screen gap-12">
            <div className="flex flex-col max-w-[150px] w-full justify-between">
              <div className="">
                <p>invoice #</p>
                <p>AB2324-01</p>
              </div>
              <div className="">
                <p>Invoice date</p>
                <p>01 Aug, 2025</p>
              </div>
              <div className="">
                <p>Reference</p>
                <p>INV-057</p>
              </div>
              <div className="">
                <p>Due date</p>
                <p>15 Aug, 2025</p>
              </div>
            </div>
            <table className="w-full rounded-xl border border-gray-300 text-sm">
              <thead className="">
                <tr>
                  <th className="border-b border-gray-300 px-4 py-4 text-left rounded-tl-xl">
                    Services
                  </th>
                  <th className="border-b border-gray-300 px-4 py-4 text-left">
                    Qty
                  </th>
                  <th className="border-b border-gray-300 px-4 py-4 text-right">
                    Rate
                  </th>
                  <th className="border-b border-gray-300 px-4 py-4 text-right rounded-tr-xl">
                    Line total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Item Name
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">1</td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $3,000.00
                  </td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $3,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Item Name
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">1</td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $3,000.00
                  </td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $3,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Item Name
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">1</td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $1,500.00
                  </td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $1,500.00
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-2">
                    Item Name
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">1</td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $1,500.00
                  </td>
                  <td className="border-b border-gray-300 text-right px-4 py-2">
                    $1,500.00
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-4 text-left font-bold">
                    Subtotal
                  </td>
                  <td className="border-b border-gray-300"></td>
                  <td className="border-b border-gray-300"></td>
                  <td className="border-b border-gray-300 text-right px-4 py-4">
                    $9,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-4 text-left font-bold">
                    Tax (10%)
                  </td>
                  <td className="border-b border-gray-300 text-right font-bold"></td>
                  <td className="border-b border-gray-300 text-right font-bold"></td>
                  <td className="border-b border-gray-300 px-4 py-4 text-right">
                    $900.00
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-left font-bold rounded-bl-xl">
                    Total due
                  </td>
                  <td className="text-right font-bold"></td>
                  <td className="font-bold"></td>
                  <td className="text-right px-4 py-4 font-bold rounded-br-xl">
                    US$ 9,900.00
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Label>
      </div>
    </div>
  );
};

export default Table;
