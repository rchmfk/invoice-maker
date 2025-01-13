"use client";
import { FormRegisterFields, formRegisterSchema } from "@/typescript/entities/FormRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormRegisterFields>({
    resolver: zodResolver(formRegisterSchema)
  });

  const registerSubmit: SubmitHandler<FormRegisterFields> = async (data) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(registerSubmit)}
      className="flex flex-col space-y-4 mt-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="John"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("name")}
        />
        {errors.name && (
          <div className="text-red-500 text-sm">{errors.name.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="test@gmail.com"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("email")}
        />
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          placeholder="*********"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("password")}
        />
        {errors.password && (
          <div className="text-red-500 text-sm">{errors.password.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="*********"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 text-sm">{errors.confirmPassword.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address">Your Address</label>
        <input
          type="text"
          id="address"
          placeholder="Jl Jalan Gg 22"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("address")}
        />
        {errors.address && (
          <div className="text-red-500 text-sm">{errors.address.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNumber">Your Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="+62 812345678"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <div className="text-red-500 text-sm">{errors.phoneNumber.message}</div>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-50 rounded-md hover:bg-blue-100 transition text-blue-800 hover:text-blue-900 py-2"
      >
        {isSubmitting ? "Loading..." : "Register"}
      </button>
      <div className="text-sm">
        Already have an account? <Link href={"/login"} className="text-blue-500 hover:underline">Sign In</Link>
      </div>
    </form>
  );
};

export default FormRegister;
