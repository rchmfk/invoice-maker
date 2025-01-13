"use client";
import {
  FormLoginFields,
  formLoginSchema,
} from "@/typescript/entities/FormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormLoginFields>({
    resolver: zodResolver(formLoginSchema),
  });

  const registerSubmit: SubmitHandler<FormLoginFields> = async (data) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
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
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-50 rounded-md hover:bg-blue-100 transition text-blue-800 hover:text-blue-900 py-2"
      >
        {isSubmitting ? "Loading..." : "Login"}
      </button>
      <div className="text-sm">
        Don't have an account? <Link href={"/register"} className="text-blue-500 hover:underline">Create Account</Link>
      </div>
    </form>
  );
};

export default FormLogin;
