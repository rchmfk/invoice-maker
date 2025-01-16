"use client";
import {
  InvoiceFormValues,
  invoiceSchema,
} from "@/typescript/entities/FormInvoice";
import {
  ArrowsPointingOutIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useFieldArray, useForm, useWatch } from "react-hook-form";
import InputInvoice from "./InputInvoice";
import { calculateTotal, formatNumber } from "@/utils/formating";

const FormInvoice = () => {
  const [indexPage, setIndexPage] = useState("invoice_data");
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      invoiceNo: "",
      date: "",
      maker: "",
      currency: "",
      client: "",
      dueDate: "",
      contactPerson: "",
      terms: "",
      notes: "",
      termsAndCondition: "",
      items: [
        { item: "", description: "", quantity: 1, discount: "", price: 0 },
        { item: "", description: "", quantity: 1, discount: "", price: 0 },
        { item: "", description: "", quantity: 1, discount: "", price: 0 },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const additionalDiscount = useWatch({
    control,
    name: "additionalDiscount",
    defaultValue: "",
  });

  const shippingCost = useWatch({
    control,
    name: "shippingCost",
    defaultValue: "",
  });


  

  const subTotal = 10000000;
  const discountTotal = 2000000;

  const total = calculateTotal({
    subTotal,
    discountTotal,
    additionalDiscount: Number(additionalDiscount || 0),
    shippingCost: Number(shippingCost || 0),
  });

  const onSubmit: SubmitHandler<InvoiceFormValues> = (data) => {
    console.log("Invoice Data:", data);
    setIndexPage("invoice_template");
  };

  const handleSaveInvoice = () => {

  }

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full mt-12">
        <div className="flex items-center max-w-5xl mx-auto pb-10 justify-center gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full">
              1
            </div>
            <p className="text-sm text-black mt-2">Invoice Data</p>
          </div>
          <div className="h-[2px] bg-gray-200 flex-1"></div>
          <div className="flex flex-col items-center text-center opacity-50">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-400 text-white rounded-full">
              2
            </div>
            <p className="text-sm text-gray-500 mt-2">Invoice Template</p>
          </div>
        </div>
      </div>

      {indexPage === "invoice_data" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-10">
            <div className="h-[2px] bg-gray-200 top-4 -z-10 absolute w-full"></div>
            <h2 className="mt-8 text-lg font-semibold w-auto bg-white max-w-16 text-black">
              Invoice
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputInvoice
              id="invoiceNo"
              label="No"
              type="text"
              placeholder="INV/2025/0001"
              register={register}
              required={true}
              error={errors.invoiceNo?.message}
            />
            <InputInvoice
              id="date"
              label="Date"
              type="date"
              placeholder=""
              register={register}
              required={true}
              error={errors.date?.message}
            />
            <InputInvoice
              id="maker"
              label="Maker"
              type="text"
              placeholder="Alice"
              register={register}
              required={true}
              error={errors.maker?.message}
            />
            <InputInvoice
              id="terms"
              label="Terms"
              type="text"
              placeholder="Net 7 Days"
              register={register}
              required={true}
              error={errors.terms?.message}
            />
            <InputInvoice
              id="currency"
              label="Currency"
              type="text"
              placeholder="Dollar (USD)"
              register={register}
              required={true}
              error={errors.currency?.message}
            />
            <InputInvoice
              id="dueDate"
              label="Due Date"
              type="date"
              placeholder=""
              register={register}
              required={true}
              error={errors.dueDate?.message}
            />
            <InputInvoice
              id="client"
              label="Client"
              type="text"
              placeholder="John Wick"
              register={register}
              required={true}
              error={errors.client?.message}
            />
            <InputInvoice
              id="contactPerson"
              label="Contact Person"
              type="text"
              placeholder="John Doe"
              register={register}
              required={true}
              error={errors.contactPerson?.message}
            />
            <InputInvoice
              id="notes"
              label="Notes"
              type="textarea"
              placeholder="Notes"
              register={register}
              rows={5}
              required={true}
              error={errors.notes?.message}
            />
            <InputInvoice
              id="termsAndCondition"
              label="Terms & Conditions"
              type="textarea"
              placeholder="Terms & Conditions"
              register={register}
              rows={5}
              required={true}
              error={errors.termsAndCondition?.message}
            />
          </div>
          <div className="w-full flex flex-col gap-8 mt-4">
            <div className="relative flex justify-between items-center">
              <div className="h-[2px] bg-gray-200 top-[14px] -z-10 absolute w-full"></div>
              <h2 className="text-lg font-semibold w-auto bg-white max-w-12 text-black">
                Items
              </h2>
              <button
                type="button"
                className="px-2 rounded-lg w-auto flex items-center gap-2 bg-green-600 text-sm py-1 text-white"
                onClick={() =>
                  append({
                    item: "",
                    description: "",
                    quantity: 1,
                    discount: "",
                    price: 0,
                  })
                }
              >
                <PlusIcon className="size-5" />
                Add Item
              </button>
            </div>
            <div>
              <div className="flex flex-col gap-4 w-full">
                {fields.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="">
                      <ArrowsPointingOutIcon className="size-5" />
                    </div>
                    <InputInvoice
                      id={`items[${index}].item`}
                      label="Item"
                      type="text"
                      placeholder="Item"
                      register={register}
                    />
                    <InputInvoice
                      id={`items[${index}].description`}
                      label="Description"
                      type="text"
                      placeholder="Description"
                      register={register}
                    />
                    <InputInvoice
                      id={`items[${index}].quantity`}
                      label="Quantity"
                      type="text"
                      placeholder="1"
                      register={register}
                    />
                    <InputInvoice
                      id={`items[${index}].discount`}
                      label="Discount"
                      type="text"
                      placeholder="%"
                      register={register}
                    />
                    <InputInvoice
                      id={`items[${index}].price`}
                      label="Price"
                      type="number"
                      placeholder="0"
                      register={register}
                    />
                    <button type="button" onClick={() => remove(index)}>
                      <TrashIcon className="size-5 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="relative flex justify-between items-center">
                <div className="h-[2px] bg-gray-200 top-[14px] -z-10 absolute w-full"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-1 justify-end">
            <div className="max-w-[300px] mt-6 flex flex-col gap-3 w-full">
              <p className="flex items-center gap-4 justify-between">
                <span className="text-sm text-gray-600">Sub Total </span>
                <span> Rp{formatNumber(10000000)}</span>
              </p>
              <p className="flex items-center gap-4 justify-between">
                <span className="text-sm text-gray-600">Discount Total </span>
                <span> Rp{formatNumber(2000000)}</span>
              </p>
              <div className="flex items-center gap-4 justify-between">
                <p className="text-sm text-gray-600">Additional Discount</p>
                <div className="max-w-36">
                  <InputInvoice
                    id="additionalDiscount"
                    label=""
                    type="text"
                    placeholder="Rp 000.000,00"
                    register={register}
                    error={errors.additionalDiscount?.message}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <p className="text-sm text-gray-600">Shipping Cost</p>
                <div className="max-w-36">
                  <InputInvoice
                    id="shippingCost"
                    label=""
                    type="text"
                    placeholder="Rp 000.000,00"
                    register={register}
                    error={errors.shippingCost?.message}
                  />
                </div>
              </div>
              <p className="flex items-center gap-4 justify-between">
                <span className="text-sm text-gray-600">Total </span>
                <span className="font-semibold"> Rp{formatNumber(total)}</span>
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-8 flex-row mt-10">
            <button
              type="button"
              onClick={handleSaveInvoice}
              className="py-2 bg-green-600 hover:bg-green-500 text-white w-full rounded-lg font-semibold"
            >
              Save
            </button>
            <button
              type="submit"
              className="py-2 border border-green-600 hover:border-green-500 text-green-600 hover:text-green-500 w-full rounded-lg font-semibold"
            >
              Next
            </button>
          </div>
        </form>
      ) : (
        <div className="">Test</div>
      )}
    </div>
  );
};

export default FormInvoice;
