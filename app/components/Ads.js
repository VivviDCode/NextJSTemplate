'use client'
import React from "react";
import { MoveForward } from "@/public/assets/Icons";
import UsePagination from "./UserPagination";


export default function Ads() {


  const data = [
    {
      adId: "I293DSA39",
      title: "Iphone 13",
      userName: "User_123",
      dateTime: "January 20, 2022 - 14:00",
      price: "$799.00",
      status: "Pending",
    },
    {
      adId: "J293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Pending",
    },
    {
      adId: "K293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Active",
    },
    {
      adId: "L293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Active",
    },
    {
      adId: "M293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Sold",
    },
    {
      adId: "N293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Sold",
    },
    {
      adId: "I293DSA39",
      title: "Iphone 13",
      userName: "User_123",
      dateTime: "January 20, 2022 - 14:00",
      price: "$799.00",
      status: "Pending",
    },
    {
      adId: "J293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Pending",
    },
    {
      adId: "K293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Active",
    },
    {
      adId: "L293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Active",
    },
    {
      adId: "M293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Sold",
    },
    {
      adId: "N293DSA39",
      title: "Samsung Galaxy S21",
      userName: "User_456",
      dateTime: "February 10, 2022 - 10:00",
      price: "$699.00",
      status: "Sold",
    },
    // Add more data objects here
  ];
  const itemsPerPage = 8;
  const {
    currentPage,
    totalPages,
    handlePrevButtonClick,
    handleNextButtonClick,
    handlePageChange,
    displayedData,
  } = UsePagination(data, itemsPerPage);
  const prevButtonDisabled = currentPage === 1;
  const nextButtonDisabled = currentPage === totalPages;
  return (
    <div className="w-full max-w-full  mt-0 mb-6 lg:flex-none ">
      <div className="p-6 relative flex flex-col min-w-0 break-words bg-white border-0 rounded-3xl ">
        <div className=" pb-0 mb-0 rounded-t-4">
          <div className="flex justify-between">
            <h6 className="mb-2 text-md text-mygray">Recent Ads</h6>
            <button
              className="text-sm text-disablelighttext"
             
            >
              Go to Ads Page <MoveForward />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto pb-4 mt-3">
          <div className="min-h-[30rem]">
            <table className="items-center text-black text-[13px] w-full mb-4 align-top border-collapse border-gray-200 ">
              <thead>
                <tr>
                  <th className="text-start font-medium border-b w-2/12">
                    Ad ID
                  </th>
                  <th className="text-start font-medium border-b w-2/12">
                    Title
                  </th>
                  <th className="text-start font-medium border-b w-2/12">
                    User Name
                  </th>
                  <th className="text-start font-medium border-b w-3/12">
                    Date & Time
                  </th>
                  <th className="text-start font-medium border-b w-2/12">
                    Price
                  </th>
                  <th className="text-start font-medium border-b w-1/12">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {displayedData.map((rowData, index) => (
                  <tr key={index} className="h-2">
                    <td className="align-middle bg-transparent whitespace-nowrap ">
                      <h6 className="mb-0 text-sm leading-normal text-myblack">
                        {rowData.id}
                      </h6>
                    </td>
                    <td className="align-middle bg-transparent whitespace-nowrap ">
                      <h6 className="mb-0 text-sm leading-normal text-myblack font-medium">
                        {rowData.title}
                      </h6>
                    </td>
                    <td className="align-middle bg-transparent whitespace-nowrap ">
                      <h6 className="mb-0 text-sm leading-normal text-myblack font-medium">
                        {rowData.userName}
                      </h6>
                    </td>
                    <td className="align-middle bg-transparent whitespace-nowrap ">
                      <h6 className="mb-0 text-sm leading-normal text-myblack">
                        {rowData.dateTime}
                      </h6>
                    </td>
                    <td className="align-middle bg-transparent whitespace-nowrap ">
                      <h6 className="mb-0 text-sm leading-normal text-myblack font-medium">
                        {rowData.price}
                      </h6>
                    </td>
                    <td className=" py-3 align-middle bg-transparent whitespace-nowrap ">
                      <button
                        className={`text-sm ${getStatusClassName(
                          "pending"
                        )} ${getStatusBgColor(
                          "pending"
                        )} border py-1 w-full rounded-md`}
                      >
                        {"pending"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
            <div className="flex justify-end mt-4 ">
              <button
                className="bg-white text-myblack rounded-lg px-3 py-1.5 mr-2 disabled:opacity-50"
                onClick={handlePrevButtonClick}
                disabled={prevButtonDisabled}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`mx-1 px-3 py-1.5 rounded-lg ${
                      pageNumber === currentPage
                        ? "bg-Active text-white"
                        : "bg-white text-myblack"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                className="bg-white text-myblack rounded-lg px-3 py-1.5 ml-2 disabled:opacity-50"
                onClick={handleNextButtonClick}
                disabled={nextButtonDisabled}
              >
                Next
              </button>
            </div>
      
        </div>
      </div>
    </div>
  );
}

function getStatusClassName(status) {
  switch (status.toLowerCase()) {
    case "pending":
      return "text-pendingText";
    case "active":
      return "text-ActiveText";
    case "sold":
      return "text-SoldText";
    default:
      return "";
  }
}

function getStatusBgColor(status) {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-pending";
    case "active":
      return "bg-Active";
    case "sold":
      return "bg-Sold";
    default:
      return "";
  }
}
