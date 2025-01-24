"use client";
import {
  InputFieldKey,
  InvoiceFormValues,
  invoiceSchema,
} from "@/typescript/entities/FormInvoice";
import {
  ArrowsPointingOutIcon,
  CheckIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import InputInvoice from "./InputInvoice";
import { calculateTotal, formatNumber } from "@/utils/formating";
import {
  TemplateHead,
  TemplateClient,
  TemplatePayment,
  TemplateTable,
  TemplateView,
} from "./template";
import { useRouter, useSearchParams } from "next/navigation";
import useCreateInvoice from "@/hooks/useCreateInvoice";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import { inputFields } from "@/public/DummtData";

const FormInvoice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "form";
  const headValue = searchParams.get("head");
  const clientInfoValue = searchParams.get("client");
  const tableValue = searchParams.get("table");
  const paymentInfoValue = searchParams.get("payment");
  const { setInvoiceData, invoiceData } = useInvoiceStore((state) => state);

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
      salesPerson: "",
      currency: "",
      client: "",
      dueDate: "",
      contactPerson: "",
      terms: "",
      notes: "",
      termsAndCondition: "",
      items: [
        { item: "", description: "", quantity: "", discount: "", price: "" },
        { item: "", description: "", quantity: "", discount: "", price: "" },
        { item: "", description: "", quantity: "", discount: "", price: "" },
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

  const onSubmit: SubmitHandler<InvoiceFormValues> = async (data) => {
    await useCreateInvoice(data);

    handleSwitchPageTypeTemplate();
    
  };

  const handleSwitchPageTypeTemplate = () => {
    let nextStep;
    switch (step) {
      case "form":
        nextStep = "head";
        break;
      case "head":
        nextStep = "client";
        break;
      case "client":
        nextStep = "table";
        break;
      case "table":
        nextStep = "payment";
        break;
      case "payment":
        nextStep = "view";
        break;
      default:
        nextStep = "form";
    }
    const queryParams = new URLSearchParams();

    queryParams.append("step", nextStep);
    if (headValue) queryParams.append("head", headValue);
    if (clientInfoValue) queryParams.append("client", clientInfoValue);
    if (tableValue) queryParams.append("table", tableValue);
    if (paymentInfoValue) queryParams.append("payment", paymentInfoValue);

    router.push(`?${queryParams.toString()}`);
  };

  const handleNext = () => {
    handleSwitchPageTypeTemplate();
  };
  
  const handleView = () => {
    if (step !== "view") {
      const queryParams = new URLSearchParams();
  
      queryParams.append("step", "view");
      if (headValue) queryParams.append("head", headValue);
      if (clientInfoValue) queryParams.append("client", clientInfoValue);
      if (tableValue) queryParams.append("table", tableValue);
      if (paymentInfoValue) queryParams.append("payment", paymentInfoValue);
  
      router.push(`?${queryParams.toString()}`);
    } else {
      router.back();
    }
    }

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full mt-12">
        <div className="flex items-center max-w-5xl mx-auto pb-10 justify-center gap-8">
          <div className="flex flex-col items-center text-center">
            <div
              className={`flex items-center text-white justify-center w-8 h-8 rounded-full bg-green-500
              } `}
            >
              {step !== "form" ? (
                <CheckIcon className="size-5 text-white" />
              ) : (
                "1"
              )}
            </div>
            <p className="text-sm text-black mt-2">Invoice Data</p>
          </div>
          <div className="h-[2px] bg-gray-200 flex-1"></div>
          <div className="flex flex-col items-center text-center">
            <div
              className={`flex items-center text-white justify-center w-8 h-8 rounded-full ${
                step !== "form" ? "bg-green-500 " : "bg-gray-400"
              } `}
            >
              2
            </div>
            <p className="text-sm text-gray-500 mt-2">Invoice Template</p>
          </div>
        </div>
      </div>

      {step === "form" ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-10">
            <div className="h-[2px] bg-gray-200 top-4 -z-10 absolute w-full"></div>
            <h2 className="mt-8 text-lg font-semibold w-auto bg-white max-w-16 text-black">
              Invoice
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {inputFields.map((field) => (
              <InputInvoice
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                register={register}
                required={field.required}
                error={errors[field.id]?.message}
                {...(field.rows && { rows: field.rows })}
              />
            ))}
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
                    quantity: "",
                    discount: "",
                    price: "",
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
                    <div className="flex items-center gap-4">
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
                <span> Rp{formatNumber("1000000")}</span>
              </p>
              <p className="flex items-center gap-4 justify-between">
                <span className="text-sm text-gray-600">Discount Total </span>
                <span> Rp{formatNumber("2000000")}</span>
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
                <span className="font-semibold"> Rp{formatNumber(String(total))}</span>
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-8 flex-row mt-10">
            <button
              type="button"
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
      ) : step === "client" ? (
        <TemplateClient />
      ) : step === "head" ? (
        <TemplateHead />
      ) : step === "table" ? (
        <TemplateTable />
      ) : step === "payment" ? (
        <TemplatePayment />
      ) : step === "view" ? (
        <TemplateView />
      ) : null}
      {step !== "form" && step !== "view" && (
        <div className="flex items-center w-full gap-4">
          <button
            type="button"
            onClick={handleView}
            className="w-full bg-green-600 hover:bg-green-500 transition rounded-lg py-2.5 text-white"
          >
            View Invoice
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-full bg-white rounded-lg py-2.5 border hover:border-green-500 hover:text-green-500 border-green-600 text-green-600"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FormInvoice;
