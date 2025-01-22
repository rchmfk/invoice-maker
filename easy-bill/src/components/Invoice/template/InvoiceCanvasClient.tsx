import { Draggable, Droppable } from "@/components/Draggable";
import { PandaBiruMuda, PandaHitam, PandaOrange } from "@/public";
import { InvoiceData } from "@/store/useInvoiceStore";
import Image from "next/image";

const InvoiceCanvasClient = ({
  invoiceData,
  head,
  client,
  payment,
  table,
  sections
}: {
  invoiceData: InvoiceData | null;
  head: string;
  client: string;
  payment: string;
  table?: string;
  sections: any;
}) => {  
  const renderHeadTemplate = () => {
    switch (head) {
      case "classic":
        return (
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
        );
      case "vibrant":
        return (
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
        );
      case "minimalist":
        return (
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
        );
      case "bold":
        return (
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
        );
      case "complex-bold":
        return (
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
        );
      default:
        return null;
    }
  };

  const renderClientTemplate = () => {
    switch (client) {
      case "classic":
        return (
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
                  <p className="text-xs text-gray-500 uppercase">
                    Invoice date
                  </p>
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
        );
      case "compact":
        return (
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
        );
      case "highlighted":
        return (
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
        );
      case "three-cols":
        return (
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
        );
      default:
        return null;
    }
  };

  const renderPaymentTemplate = () => {
    switch (payment) {
      case "classic":
        return (
          <div className="flex items-end p-4 justify-between">
            <div className="w-full">
              <h2 className="font-semibold">Thank you for the business!</h2>
              <p className="text-gray-500">
                Please pay within 15 days of receiving this invoice
              </p>
            </div>
            <div className="flex flex-col w-full text-gray-500 py-2 px-4 bg-blue-50 rounded-xl">
              <h2 className="font-semibold text-black">Payment details</h2>
              <p>ABCD BANK</p>
              <p>SWIFT: ABCDUSBBXXX</p>
              <p>Acct #37447892300011</p>
              <div className="flex gap-4 border-t-2 pt-2 border-white items-center">
                <p>
                  +91 00000 00000 &nbsp;{" "}
                  <span className="text-gray-300">|</span>
                </p>
                <p>hello@gmail.com</p>
              </div>
            </div>
          </div>
        );
      case "modern":
        return (
          <div className="flex flex-col flex-1 gap-4 p-4">
            <h2>Thank you for the business!</h2>
            <div className="flex items-center">
              <p className="text-gray-500  max-w-[108px] w-full text-sm">
                PAYMENT INFO
              </p>
              <div className="h-[2px] w-full bg-gray-200"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <h2>ACCOUNT NAME</h2>
                <p className="text-sm text-gray-500">
                  Business address, City, IN - 000 000
                </p>
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
        );
      default:
        return null;
    }
  };
  const renderTableTemplate = () => {
    switch (table) {
      case "classic":
        return (
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
        );
      case "modern":
        return (
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
        );
      case "secondary":
        return (
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
        );
      case "service-highlighted":
        return (
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
        );
        case "complex": 
        return (
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
        )
      default:
        return null;
    }
  };

  const isTemplateSelected = head || client || table || payment;

  if (isTemplateSelected === null) {
    return (
      <div className="flex items-center flex-col justify-center w-full">
        <div className="p-2 text-2xl text-center">⚠️</div>
        <p>You must select at least one template to display your invoice.</p>
      </div>
    );
  }

  return (
    <div  className="flex flex-col w-full gap-12 p-10">
      {sections.map((section: any) => (
        <Droppable key={section.id} id={section.id}>
          <Draggable id={section.id}>
            <div>
              {section.id === "head" && renderHeadTemplate()}
              {section.id === "client" && renderClientTemplate()}
              {section.id === "table" && renderTableTemplate()}
              {section.id === "payment" && renderPaymentTemplate()}
            </div>
          </Draggable>
        </Droppable>
      ))}
    </div>
  );
};

export default InvoiceCanvasClient;