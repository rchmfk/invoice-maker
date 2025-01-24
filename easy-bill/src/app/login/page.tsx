import React from "react";
import { Container } from "@/components/Landing/Container";
import FormLogin from "./FormLogin";
import { Navbar } from "@/components/Landing/Navbar";

export default function LoginPage() {
  return (
    <>
      <Container>
        <Navbar />
          <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
            <div className="">
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <FormLogin />
              </dl>
            </div>
            <div></div>
          </div>
      </Container>
    </>
  );
}
