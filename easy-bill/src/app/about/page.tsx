import { Footer } from "@/components/Landing/Footer";
import { Navbar } from "@/components/Landing/Navbar";
import { Container } from "@/components/Landing/Container";
import { Cta } from "@/components/Landing/Cta";
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
    description: "Securely access your account anytime and anywhere.",
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
    description: "Track the status of every invoice with real-time updates.",
  },
  {
    name: "PDF Invoices",
    description:
      "Download and send your invoices as PDF files for easy sharing.",
  },
  {
    name: "Payment Reminders",
    description: "Set automated reminders to ensure timely payments.",
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
      <Container>
        <Navbar />
        <div className="mx-auto grid  grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-500">
              EasyBill is an intelligent solution for creating and managing
              invoices for small to medium-sized businesses. We simplify the
              invoicing process, allowing you to focus on growing your business
              while we handle the administrative details quickly, easily, and
              efficiently.
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
        <Cta />
      </Container>
      <Footer />
    </>
  );
}

export default About;
