import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      {/* --- FOOTER --- */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-8 lg:px-8">
          <div className="flex-auto">
            <a
              href="/"
              className="mb-4 text-lg/6 font-semibold text-zinc-900 group-hover:text-zinc-600"
            >
              ViralFeed
            </a>
            <p className="mt-4 text-sm/6 text-zinc-600">
              Never Miss a Trend: Your Daily Feed of Viral News
            </p>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-zinc-900 mb-4">Information</p>
            <div className="flex flex-col text-sm/6 gap-3">
              <a href="/" className="text-zinc-600">
                Home
              </a>
              <a href="/about" className="text-zinc-600">
                About Us
              </a>
            </div>
          </div>
          {/* <div className="flex-1">
            <p className="font-semibold text-zinc-900 mb-4">Our Services</p>
            <p className="mt-4 text-sm/6 text-zinc-600">
              Highlights the idea of staying on top of viral stories and trends.
            </p>
          </div> */}
          <div className="flex-1">
            <p className="font-semibold text-zinc-900 mb-4">Contact</p>
            <p className="mt-4 text-sm/6 text-zinc-600">
              ViralFeed
              <br />
              cs@viralfeed.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
