import React from "react";
import { Container } from "@/components/Landing/Container";
import FormLogin from "./FormLogin";
import { Navbar } from "@/components/Landing/Navbar";

export default function LoginPage() {
  return (
    <>
      <Container>
        <Navbar />
        <div className="">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
              className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account
                </h1>
                <FormLogin />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div className="">
            <dl className="mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <FormLogin />
            </dl>
          </div>
          <div></div>
        </div> */}
      </Container>
    </>
  );
}
