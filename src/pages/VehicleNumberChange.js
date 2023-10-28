import React, { useState } from "react";
import { RefreshIcon, ColorSwatchIcon } from "@heroicons/react/solid";

const VehicleNumberChange = () => {
  // Initial state for form fields
  const initialFormState = {
    vehicleNo: "",
    rfidTag: "",
    stage: "",
    newVehicleNo: "",
    remarks: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to reset the form
  const resetForm = () => {
    setFormData(initialFormState);
  };

  return (
    <div className="flex flex-col py-9">
      <h1 className="text-3xl text-gray-700 pl-4">Vehicle Number Change</h1>

      {/* Form Container */}
      <form
        className="bg-white rounded-lg shadow-lg mt-24 mx-auto w-80 md:w-4/5"
        onSubmit={(e) => e.preventDefault()} // Prevent form submission 
      >
        <h2 className="text-xl font-semibold mb-4 border-b py-2 px-4 border-gray-300">
          Action Options
        </h2>
        <div className="flex flex-col md:flex-row justify-between w-full p-6 md:space-x-10">
          <div className="mb-2 md:mb-4 md:pb-4 w-full">
            {/* Left Side */}
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                <span className="text-red-500">*</span> Vehicle No.
                <input
                  type="text"
                  name="vehicleNo"
                  value={formData.vehicleNo}
                  onChange={handleInputChange}
                  className="border mt-2 border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Enter Vehicle No."
                  required
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                RFID tag
                <input
                  type="text"
                  name="rfidTag"
                  value={formData.rfidTag}
                  onChange={handleInputChange}
                  className="border mt-2 border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="RFID tag"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                Stage
                <input
                  type="text"
                  name="stage"
                  value={formData.stage}
                  onChange={handleInputChange}
                  className="border mt-2 border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Stage"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col w-full">
            {/* Right Side */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2">
                  <span className="text-red-500">*</span> New Vehicle number
                  <input
                    type="text"
                    name="newVehicleNo"
                    value={formData.newVehicleNo}
                    onChange={handleInputChange}
                    className="border mt-2 border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Enter New Vehicle number"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2">
                  <span className="text-red-500">*</span> Remarks
                  <textarea
                    type="text"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    className="border mt-2 border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Enter Remarks"
                    required
                  />
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded flex items-center"
              >
                <ColorSwatchIcon className="h-5 w-5 mr-2" />
                Change
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-orange-500 w-fit flex hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
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

export default VehicleNumberChange;
