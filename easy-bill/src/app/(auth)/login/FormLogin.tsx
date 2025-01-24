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
import { auth, db, signinWithGoogle } from "@/services/firebase";
import { useRouter } from "next/navigation";
import { useAddUser } from "@/hooks/useAddUser";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
      // First, try to sign in with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
  
      const user = userCredential.user;
      const userId = user.uid;
  
      // Check Firestore to see if the user exists with the given userId
      const userRef = doc(db, "users", userId);
      const userDoc = await getDoc(userRef);
  
      if (userDoc.exists()) {
        // User exists, proceed with login and routing
        const userData = userDoc.data();
        console.log("User found in Firestore:", userData);
        
        // Optionally, you can add additional checks here (e.g., user role, status)
        router.push("/"); // Redirect to the homepage or dashboard
      } else {
        // User doesn't exist in Firestore, handle the error (e.g., show a message or create a new user)
        console.log("User not found in Firestore.");
        // You can display a message or take action accordingly, like logging the user out
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  const loginGoogle = () => {
    signinWithGoogle()
      .then(async (result) => {
        const user = result.user;
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("User found in Firestore:", userData);
          router.push("/");
        } else {
          const newUser = {
            name: user.displayName,
            email: user.email,
            userId: user.uid,
            phoneNumber: user.phoneNumber || "",
            address: "",
            role: "Client",
          };

          await setDoc(userRef, newUser);

          router.push("/client");
        }
      })
      .catch((error) => {
        console.error(`Error during Google sign-in: ${error.message}`);
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
      <form onSubmit={handleSubmit(loginSubmit)} className="space-y-4 md:space-y-6" action="#">
        {/* <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            Name</label>
          <input type="text" id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John" {...register("name")} />
          {errors.name && (
            <div className="text-red-500 text-sm">{errors.name.message}</div>
          )}
        </div> */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            email</label>
          <input type="email" id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com" {...register("email")} />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("password")} />
          {errors.password && (
            <div className="text-red-500 text-sm">
              {errors.password.message}
            </div>
          )}
        </div>
        <button disabled={isSubmitting} type="submit"
          className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          {isSubmitting ? "Loading..." : "Login"}
        </button>
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
