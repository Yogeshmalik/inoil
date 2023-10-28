import React, { useState } from "react";
import { RefreshIcon, SearchIcon } from "@heroicons/react/solid";
import { useTable } from "react-table";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndentUsageReport = () => {
  const [showDateFilter, setShowDateFilter] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    showDateFilter: false,
    fromDate: "",
    toDate: "",
    transporterName: "",
    shipToParty: "",
    salesDistrict: "",
    salesOrder: "",
    grade: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShow = () => {
    // Perform actions to show details based on formData
    console.log("Showing details:", formData);

    // Show toast notification
    toast.success("Details shown successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  const handleReset = () => {
    // Reset the form fields
    setFormData({
      showDateFilter: false,
      fromDate: "",
      toDate: "",
      transporterName: "",
      shipToParty: "",
      salesDistrict: "",
      salesOrder: "",
      grade: "",
    });

    // Show toast notification
    toast.info("Form reset successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  // Table data (dummy data for now)
  const tableData = React.useMemo(
    () => [
      {
        SNo: 1,
        Name: "John Doe",
        RegistrationNo: "ABC123",
        DateTime: "2023-10-27 10:00 AM",
      },
      {
        SNo: 2,
        Name: "Jane Smith",
        RegistrationNo: "XYZ456",
        DateTime: "2023-10-27 11:30 AM",
      },
    ],
    []
  );

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: "S.No.",
        accessor: "SNo",
      },
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "Registration No.",
        accessor: "RegistrationNo",
      },
      {
        Header: "Date & Time",
        accessor: "DateTime",
      },
    ],
    []
  );

  // Create a table instance using react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  return (
    <div className="flex flex-col py-6">
      <h1 className="text-3xl text-gray-700 pl-4">Indent Usage Report</h1>

      {/* Form Container */}
      <form
      type='submit'
        className="bg-white rounded-lg shadow-lg mt-24 md:mx-auto mx-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-xl font-semibold mb-4 border-b py-2 px-4 border-gray-300">
          Action Options
        </h2>
        <div className="flex flex-col md:flex-row justify-between p-3 md:p-6 md:space-x-10 space-x-1">
          <div className="md:flex mb-2 md:mb-4 md:pb-4 w-full">
            <div className="md:pr-10">
              {/* Section 1 */}
              <div className="w-full flex flex-col md:flex-row justify-between">
                <label className="min-w-fit items-start text-gray-600 text-sm mb-2 mr-2 cursor-pointer">
                  Date Filter
                  <input
                    type="checkbox"
                    className="ml-2 cursor-pointer"
                    name="showDateFilter"
                    checked={formData.showDateFilter}
                    onChange={handleInputChange}
                  />
                </label>
                <div className="md:flex mx-auto w-full items-center">
                  {formData.showDateFilter && (
                    <div className="md:flex md:justify-evenly w-full">
                      <label className=" text-gray-600 text-sm md:mb-2 cursor-pointer">
                        Date From{" "}
                        <span className="text-red-500 align-middle">*</span>
                        <input
                          type="date"
                          name="fromDate"
                          value={formData.fromDate}
                          onChange={handleInputChange}
                          className="border md:mt-2 mb-4 md:mb-0 border-gray-300 rounded px-3 py-2 w-full cursor-pointer"
                          required
                        />
                      </label>
                      <label className=" text-gray-600 text-sm mb-2 cursor-pointer">
                        Date To{" "}
                        <span className="text-red-500 align-middle">*</span>
                        <input
                          type="date"
                          name="toDate"
                          value={formData.toDate}
                          onChange={handleInputChange}
                          className="border md:mt-2 mb-4 md:mb-0 border-gray-300 rounded px-3 py-2 w-full cursor-pointer"
                          required
                        />
                      </label>
                    </div>
                  )}
                  <label className=" text-gray-600 text-sm mb-2 cursor-pointer">
                    Transporter Name
                    <select
                      name="transporterName"
                      value={formData.transporterName}
                      onChange={handleInputChange}
                      className="border md:mt-2 mb-4 md:mb-0 border-gray-300 rounded px-3 py-2 w-full bg-white cursor-pointer"
                    >
                      <option value="">- Select One -</option>
                      <option value="Option1">Option 1</option>
                      <option value="Option2">Option 2</option>
                      <option value="Option3">Option 3</option>
                      <option value="Option4">Option 4</option>
                      <option value="Option5">Option 5</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* Section 2 */}
              <div className="md:flex md:space-x-4">
                <label className=" text-gray-600 text-sm mb-2 md:mt-4 cursor-pointer">
                  Ship To Party
                  <select
                    name="shipToParty"
                    value={formData.shipToParty}
                    onChange={handleInputChange}
                    className="border md:mt-2 mb-4 md:mb-0 border-gray-300 rounded px-3 py-2 w-full bg-white cursor-pointer"
                  >
                    <option value="">- Select One -</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>

                <label className="block text-gray-600 text-sm mb-2 md:mt-4 cursor-pointer">
                  Sales District
                  <select
                    name="salesDistrict"
                    value={formData.salesDistrict}
                    onChange={handleInputChange}
                    className="border md:mt-2 mb-4 md:mb-0 border-gray-300 rounded px-3 py-2 w-full bg-white cursor-pointer"
                  >
                    <option value="">- Select One -</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>

                <label className="block text-gray-600 text-sm mb-2 md:mt-4 cursor-pointer">
                  Sales Order
                  <select
                    name="salesOrder"
                    value={formData.salesOrder}
                    onChange={handleInputChange}
                    className="border md:mt-2 mb-4 md:mb-0 border-gray-300 rounded px-3 py-2 w-full bg-white cursor-pointer"
                  >
                    <option value="">- Select One -</option>
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                </label>

                <label className="block text-gray-600 text-sm mb-2 md:mt-4 cursor-pointer">
                  Grade
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="border md:mt-2 mb-4 md:mb-0 border-gray-300 rounded px-3 py-2 w-full bg-white cursor-pointer"
                  >
                    <option value="">- Select One -</option>
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
                onClick={handleShow}
              >
                <SearchIcon className="h-5 w-5 mr-2" />
                Show
              </button>
              <button
                className="bg-orange-500 w-fit flex hover:bg-orange-600 text-white 
              font-semibold py-2 px-4 rounded"
                onClick={handleReset}
              >
                <RefreshIcon className="h-5 w-5 mr-2" />
                <span className="">Reset</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-8">
        {/* Table */}
        <div className="overflow-x-auto md:mx-8">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden divide-y divide-gray-200 opacity-90">
            <thead className="bg-gradient-to-l from-[#03174f] to-[#f37022]">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-6 py-3 text-left text-xs leading-4 font-bold text-white uppercase tracking-wider"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default IndentUsageReport;
