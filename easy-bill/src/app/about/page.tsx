import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                About
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
