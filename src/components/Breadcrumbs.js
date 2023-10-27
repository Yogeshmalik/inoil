import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const Breadcrumbs = () => {
  return (
    <div className="flex justify-between">
      <div className="mx-auto bg-white w-full lg:mx-0 sm:text-center lg:text-left lg:flex lg:items-center pt-10">
        <div className="flex">Home icon</div>
        <div className="lg:pb-12">
          <div className="inline-flex items-center text-xs p-1 pr-2 xs:text-base text-gray-400 rounded-full bg-gray-50/60 sm:text-base lg:text-sm hover:text-blue-600">
            <div href="/">
              <span className="px-3 py-0.5 bg-white font-medium leading-5 tracking-wide rounded-full">
                bsvblockchain
              </span>
            </div>
            <div className="flex items-center">
              <span className="ml-4 font-medium">Teranode</span>
              <ChevronRightIcon className="w-4 h-4 ml-1" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
