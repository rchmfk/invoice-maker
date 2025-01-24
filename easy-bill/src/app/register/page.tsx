
import Navbar from "@/components/Navbar";
import FormRegister from "./FormRegister";

export default function RegisterPage() {
 
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div></div>
          <div className="w-full">
            <dl className="w-full mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <FormRegister />
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
