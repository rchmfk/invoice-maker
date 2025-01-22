import Image from "next/image";
import { Container } from "@/components/Landing/Container";
import heroImg from "../../public/img/hero.png";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap my-10">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Create Invoices Instantly, Boost Your Professionalism
            </h1>
            <p className="py-5 text-md leading-normal text-gray-500 lg:text-lg xl:text-lg">
            EasyBill lets you create and manage invoices effortlessly. No design or accounting skills needed—just select a template, customize, and send in seconds.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/login"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
