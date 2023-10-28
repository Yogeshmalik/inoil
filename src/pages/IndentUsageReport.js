import React, { useState } from "react";
import {
  RefreshIcon,
  ColorSwatchIcon,
  SearchCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const IndentUsageReport = () => {
  const [showDateFilter, setShowDateFilter] = useState(false);
  return (
    <div className="flex flex-col py-9">
      <h1 className="text-3xl text-gray-700 pl-4">Indent Usage Report</h1>

      {/* Form Container */}
      <form
        className="bg-white rounded-lg shadow-lg mt-24 mx-auto w-80 md:w-4/5"
        onSubmit={(e) => e.preventDefault()} // Prevent form submission
      >
        <h2 className="text-xl font-semibold mb-4 border-b py-2 px-4 border-gray-300">
          Action Options
        </h2>
        <div className="flex flex-col md:flex-row justify-between p-6 md:space-x-10">
          <div className="flex mb-2 md:mb-4 md:pb-4 w-full">
            <div className="pr-10">
              {/* Section 1 */}
              <div className="w-full flex ">
                <label className="block text-gray-600 text-sm mb-2">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={showDateFilter}
                    onChange={() => setShowDateFilter(!showDateFilter)}
                  />
                  Date Filter
                </label>
                {showDateFilter && (
                  <div className="flex w-full">
                    <label className=" text-gray-600 text-sm mb-2">
                      Date From{" "}
                      <span className="text-red-500 align-middle">*</span>
                      <input
                        type="date"
                        className="border mt-2 border-gray-300 rounded px-3 py-2 w-full"
                      />
                    </label>
                    <label className=" text-gray-600 text-sm mb-2">
                      Date To{" "}
                      <span className="text-red-500 align-middle">*</span>
                      <input
                        type="date"
                        className="border mt-2 border-gray-300 rounded px-3 py-2 w-full"
                      />
                    </label>
                  </div>
                )}
                <label className=" text-gray-600 text-sm mb-2">
                  Transporter Name
                  <select className="border mt-2 border-gray-300 rounded px-3 py-2 w-full">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>
              </div>

              {/* Section 2 */}
              <div className="flex">
                <label className=" text-gray-600 text-sm mb-2 mt-4">
                  Ship To Party
                  <select className="border mt-2 border-gray-300 rounded px-3 py-2 w-full">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>

                <label className="block text-gray-600 text-sm mb-2 mt-4">
                  Sales District
                  <select className="border mt-2 border-gray-300 rounded px-3 py-2 w-full">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>

                <label className="block text-gray-600 text-sm mb-2 mt-4">
                  Sales Order
                  <select className="border mt-2 border-gray-300 rounded px-3 py-2 w-full">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>

                <label className="block text-gray-600 text-sm mb-2 mt-4">
                  Grade
                  <select className="border mt-2 border-gray-300 rounded px-3 py-2 w-full">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex space-x-2 items-end text-end h-full">
              <button
                className="bg-lime-500 hover:bg-lime-600 text-white 
              font-semibold py-2 px-4 rounded flex items-center"
              >
                <SearchIcon className="h-5 w-5 mr-2" />
                Show
              </button>
              <button
                className="bg-orange-500 w-fit flex hover:bg-orange-600 text-white 
              font-semibold py-2 px-4 rounded"
              >
                <RefreshIcon className="h-5 w-5 mr-2" />
                <span className="">Reset</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IndentUsageReport;
