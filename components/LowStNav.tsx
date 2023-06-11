import React from "react";
import Link from "next/link";

type Props = {};

export default function LowStNav({}: Props) {
  return (
    <div className="lg:h-auto sm:h-40 h-60 max-w-screen-xl xl:mx-auto mx-5 rounded-lg px-5 lg:pt-3 pt-0 pb-3 flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-center sticky bottom-5 bg-white border-t-4 border-black drop-shadow-lg transition-all ease-in-out duration-150">
      <button className="rotate-0 lg:hidden absolute top-2 right-3 text-black transition-all ease-in-out duration-150">
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          shapeRendering="geometricPrecision"
        >
          <path d="M6 9l6 6 6-6"></path>
        </svg>
      </button>
      <div className="text-center lg:text-left">
        <p className="font-cal text-lg sm:text-2xl text-black">
          Mallarket Demo
        </p>
        <p className="text-sm text-gray-700 mt-2 lg:mt-0">
          This is a demo site showcasing how to build a decentralized
          marketplace.
        </p>
      </div>
      <div className="flex space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row flex-col lg:w-auto w-full text-center">
        <Link
          href="/main-page"
          className="flex-auto font-cal text-lg rounded-md py-1 sm:py-3 px-5 text-black border border-gray-200 hover:border-black transition-all ease-in-out duration-150 whitespace-no-wrap"
        >
          Get started
        </Link>
        {/* <a
          className="flex-auto font-cal text-lg rounded-md py-1 sm:py-3 px-5 text-black border border-gray-200 hover:border-black transition-all ease-in-out duration-150 whitespace-no-wrap"
          href="https://app.vercel.pub"
          rel="noreferrer"
          target="_blank"
        >
          Get started
        </a> */}
        <Link
          href="/"
          className="flex-auto font-cal text-lg bg-black text-white border border-black rounded-md py-1 sm:py-3 px-5 hover:text-black hover:bg-white transition-all ease-in-out duration-150 whitespace-no-wrap"
        >
          TEST
        </Link>
        {/* <a
          className="flex-auto font-cal text-lg bg-black text-white border border-black rounded-md py-1 sm:py-3 px-5 hover:text-black hover:bg-white transition-all ease-in-out duration-150 whitespace-no-wrap"
          href="/"
          rel="noreferrer"
          target="_blank"
        >
          NULL
        </a> */}
      </div>
    </div>
  );
}
