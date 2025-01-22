import { FieldError } from "react-hook-form";

interface InputInvoiceProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: any;
  required?: boolean;
  rows?: number;
  error?: string | FieldError | any;
}

const InputInvoice: React.FC<InputInvoiceProps> = ({
  id,
  label,
  type,
  placeholder,
  register,
  required = false,
  rows,
  error,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute -top-3 left-4 bg-white px-1 text-black/50"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className="py-4 px-4 rounded-lg border w-full border-black/10 focus:border-black/20 resize-none"
          {...register(id)}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="py-4 px-4 rounded-lg border w-full border-black/10 focus:border-black/20 placeholder:text-black"
          {...register(id)}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputInvoice