"use client";
import {
  FormRegisterFields,
  formRegisterSchema,
} from "@/typescript/entities/FormRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { useAddUser } from "@/hooks/useAddUser";
import { auth, signinWithGoogle } from "@/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Google from "@/public/google.png";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

const FormRegister = () => {
  const router = useRouter();
  // useProtectedRoute("Client");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormRegisterFields>({
    resolver: zodResolver(formRegisterSchema),
  });

  const registerSubmit: SubmitHandler<FormRegisterFields> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      const userData = {
        userId: auth?.currentUser?.uid,
        name: data.name,
        email: data.email,
        role: data.role,
        phoneNumber: data.phoneNumber,
        address: data.address,
      };

      useAddUser(userData);

      reset({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phoneNumber: "",
        role: "USER",
      });
      router.push("/login");
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const RegisterGoogle = () => {
    signinWithGoogle()
      .then((result) => {
        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          userId: result.user.uid,
          phoneNumber: result.user.phoneNumber,
          address: "",
          role: "USER",
        };

        useAddUser(userData);
        // router.push("/");
      })
      .catch((err) => console.log(err));
  };

  const handleClearForm = () => {
    reset({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phoneNumber: "",
      role: "USER",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(registerSubmit)}
      className="w-full flex flex-col space-y-4 mt-4"
    >
      <div className="flex flex-col gap-1.5">
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("email")}
        />
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="*********"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phoneNumber">Your Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="+62 812345678"
          className="py-2 px-4 border border-black/20 rounded-md"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <div className="text-red-500 text-sm">
            {errors.phoneNumber.message}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="role" className="form_label">
          Select Role
        </label>
        <select
          {...register("role")}
          className="py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          <option value="Client">Client</option>
          <option value="Admin">Admin</option>
        </select>
        {errors.role && (
          <div className="text-red-500 text-sm">{errors.role.message}</div>
        )}
      </div>
      <div className="flex gap-4 items-center">
        <button
          type="button"
          className="bg-blue-50 max-w-[100px] w-full rounded-md hover:bg-blue-100 transition text-blue-800 hover:text-blue-900 py-2"
          onClick={handleClearForm}
        >
          Clear
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-800 max-w-[100px] w-full rounded-md hover:bg-blue-900 transition text-blue-50 hover:text-blue-100 py-2"
        >
          {isSubmitting ? "Loading..." : "Register"}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center my-2">
        <div className="w-full relative flex items-center justify-center">
          <p className="text-center bg-white p-2 z-10 static text-gray-600">
            Or
          </p>
          <hr className="absolute top-[19px] inset-0 border border-black/10" />
        </div>
        <div className="flex gap-4 mt-2 w-full">
          <button
            type="button"
            onClick={RegisterGoogle}
            className="py-2.5 flex items-center gap-4 w-full justify-center px-4 border border-black/10 hover:bg-black/5 rounded-md"
          >
            <Image src={Google} alt="Google Logo" width={25} height={25} />
            <p>Sign up With Google</p>
          </button>
        </div>
      </div>
      <div className="text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="text-blue-500 hover:underline">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default FormRegister;
