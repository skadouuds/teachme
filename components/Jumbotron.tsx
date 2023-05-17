import React from "react";
import Image from "next/image";

function Jumbotron() {
  return (
    <section className="bg-[#6016E5] h-1/3 md:h-1/2">
      <div className="relative h-full">
        <div className="absolute bottom-0 left-0">
          <Image
            src="/images/geometry1.svg"
            width={500}
            height={500}
            alt="geometry1"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/images/geometry2.svg"
            width={350}
            height={350}
            alt="geometry2"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center h-full">
          <div className="w-full lg:w-1/2 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="mb-4 lg:mb-0 lg:mr-4">
                <Image
                  src="/images/jumbotron.svg"
                  width={400}
                  height={400}
                  alt="jumbotron"
                />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-white">
                  Your Personal Mentor Finder.
                </h1>
                <p className="text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-5">
                  “The best way to predict your future is to create it.”
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center mt-4 py-3 px-5 text-base font-medium text-center text-[#4700C6] rounded-xl bg-[#FFE873]"
                >
                  Get started
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
