export const formatNumber = (num: string) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatInvoiceId = (invoiceId: number) => {
    return `#${String(invoiceId).padStart(6, '0')}`;
}


export const formatBackgroundPayment = (payment: string) => {
  switch (payment) {
    case "paid":
      return "text-green-600 bg-green-100";
    case "process":
      return "text-yellow-600 bg-yellow-100";
    case "proceed to client":
      return "text-white bg-green-600";
    case "pending":
      return "text-orange-600 bg-orange-100";
  }
};

export  const calculateTotal = ({
  subTotal,
  discountTotal,
  additionalDiscount,
  shippingCost,
}: {
  subTotal: number;
  discountTotal: number;
  additionalDiscount: number;
  shippingCost: number;
}) => {
  return subTotal - discountTotal - additionalDiscount + shippingCost;
};