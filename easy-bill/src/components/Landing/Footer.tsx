import Link from "next/link";
import React from "react";
import { Container } from "@/components/Landing/Container";

export function Footer() {
  const navigation = ["Home", "About Us"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500"
              >
                <span>EasyBill</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500">
              EasyBill lets you create and manage invoices effortlessly. No
              design or accounting skills needed—just select a template,
              customize, and send in seconds.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600">
          Copyright © {new Date().getFullYear()}. Made with ♥
        </div>
      </Container>
    </div>
  );
}