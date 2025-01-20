import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import React from "react";
const descriptions = [
  {
    name: "Our Mission",
    description:
      "Our mission is to make financial management easier for your business. With EasyBill, we aim to simplify the creation and management of invoices, allowing your business to run more smoothly, save time, and reduce errors. We are committed to providing practical and effective solutions so you can focus on business growth.",
  },
  {
    name: "What We Offer",
    description:
      "EasyBill offers an intuitive invoice maker platform that is easy to use and packed with features to help you create, manage, and track invoices effortlessly. We provide a complete solution for generating, managing, and following up on invoices, allowing you to be more efficient in running your business.",
  },
];

const features = [
  {
    name: "Registration",
    description:
      "Sign up in just a few simple steps and start using EasyBill to manage your invoices.",
  },
  {
    name: "Login",
    description:
      "Securely access your account anytime and anywhere.",
  },
  {
    name: "Invoice Creation",
    description:
      "Quickly create professional invoices using ready-made templates.",
  },
  {
    name: "Client Management",
    description:
      "Easily store and organize client information for future invoices.",
  },
  {
    name: "Invoice Status",
    description:
      "Track the status of every invoice with real-time updates.",
  },
  {
    name: "PDF Invoices",
    description:
      "Download and send your invoices as PDF files for easy sharing.",
  },
  {
    name: "Payment Reminders",
    description:
      "Set automated reminders to ensure timely payments.",
  },
  {
    name: "Custom Invoice Designs",
    description:
      "Personalize your invoices with custom branding and design options.",
  },
  {
    name: "Financial Reports",
    description:
      "Generate comprehensive financial reports to track your business's performance.",
  },
  {
    name: "Statistical Graphs",
    description:
      "Visualize key business metrics with intuitive graphs and statistics.",
  },
  {
    name: "Calendar Integration for Reminders",
    description:
      "Integrate with your calendar to stay on top of deadlines and payment reminders.",
  },
  {
    name: "Email Notifications",
    description:
      "Receive email notifications for important updates about your invoices.",
  },
];
function About() {
  return (
    <>
    <Navbar/>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-500">
            EasyBill is an intelligent solution for creating and managing invoices for small to medium-sized businesses. We simplify the invoicing process, allowing you to focus on growing your business while we handle the administrative details quickly, easily, and efficiently.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
            {descriptions.map((feature) => (
              <div key={feature.name} className="pt-8">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </div>
          <div className="">
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* --- SUBSCRIBE --- */}
      <div className="relative isolate overflow-hidden bg-zinc-900 py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg text-zinc-300">
                Get weekly articles, trending news, and exclusive content
                straight to your inbox.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-zinc-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-500 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-zinc-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 text-base/7 text-zinc-400">
                  Stay ahead with trending stories and exclusive insights
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  No spam
                </dt>
                <dd className="mt-2 text-base/7 text-zinc-400">
                  Only curated content you’ll love, just the stories you care
                  about
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default About;
