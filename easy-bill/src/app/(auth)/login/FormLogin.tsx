"use client";
import {
  FormLoginFields,
  formLoginSchema,
} from "@/typescript/entities/FormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Google from "@/public/google.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signinWithGoogle } from "@/services/firebase";
import { useRouter } from "next/navigation";
import { useAddUser } from "@/hooks/useAddUser";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

const FormLogin = () => {
  useProtectedRoute("Client");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormLoginFields>({
    resolver: zodResolver(formLoginSchema),
  });

  const loginSubmit: SubmitHandler<FormLoginFields> = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // add something later on

      router.push("/");
    } catch (error) {
      console?.error(`Error: ${error}`);
    }
  };

  const loginGoogle = () => {
    signinWithGoogle()
      .then((result) => {
        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          userId: result.user.uid,
          phoneNumber: result.user.phoneNumber,
          address: "",
          role: "Client",
        };

        useAddUser(userData);
        // router.push("/")
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  };

  const handleClearForm = () => {
    reset({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(loginSubmit)}
        className="flex flex-col space-y-4 mt-4"
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
            <div className="text-red-500 text-sm">
              {errors.password.message}
            </div>
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
            {isSubmitting ? "Loading..." : "Login"}
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
              onClick={loginGoogle}
              className="py-2.5 flex items-center gap-4 w-full justify-center px-4 border border-black/10 hover:bg-black/5 rounded-md"
            >
              <Image src={Google} alt="Google Logo" width={25} height={25} />
              <p>Sign in With Google</p>
            </button>
          </div>
        </div>
        <div className="text-sm">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
