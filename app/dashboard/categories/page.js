'use client'
import UsePagination from "@/app/components/UserPagination";
import SearchIcon, { AddIcon, DeleteIcon, EditIcon, SortIcon, ViewIcon } from "@/public/assets/Icons";
import img from "../../../public/assets/images/retrosupply-jLwVAUtLOAQ-unsplash.jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryFetch } from "../../saga-redux/redux/ProductsSlice";
import { useEffect } from "react";

export default function Categories() {
  const dispatch = useDispatch();
  const {allCategory} = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(getAllCategoryFetch());
  }, [dispatch]);

  const itemsPerPage = 8;
  const {
    currentPage,
    totalPages,
    handlePrevButtonClick,
    handleNextButtonClick,
    handlePageChange,
    displayedData,
  } = UsePagination(allCategory, itemsPerPage);

  const prevButtonDisabled = currentPage === 1;
  const nextButtonDisabled = currentPage === totalPages;

  return (
    <div className="w-full max-w-full  mt-0 mb-6 lg:flex-none">
      <div className="p-6 relative flex flex-col min-w-0 break-words bg-white border-0 rounded-3xl ">
        <div className=" pb-0 mb-0 rounded-t-4">
          <div className="flex justify-between">
            <div className="flex justify-center items-center bg-[#F9FAFB] px-5 rounded-lg h-[40px] lg:w-3/12">
              <input
                type="search"
                placeholder="Search here..."
                className="h-[40px] w-full bg-[#F9FAFB] placeholder:text-disabletext placeholder:text-sm"
              />
              <span>
                <SearchIcon />
              </span>
            </div>
            <div className="flex gap-5">
              <div>
                <button className="border-2 text-myblack text-md font-medium px-3 py-1.5 flex items-center gap-3 rounded-lg">
                  {" "}
                  <SortIcon />
                  <span>Sort By</span>
                </button>
              </div>
              <div>
                <button
                  className="border-2 text-myblack text-sm font-medium px-3 py-1.5 flex items-center gap-3 rounded-lg bg-Active"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {" "}
                  <AddIcon />
                  <span>Add Category</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto pb-4 mt-3">
          <div className="min-h-[30rem]">
            <table className="items-center text-black  text-sm w-full mb-4 align-top">
              <thead>
                <tr className="bg-mygraytable">
                  <th className="text-start font-bold  w-2/12 py-4 ps-4">
                    Category ID
                  </th>
                  <th className="text-start font-bold  w-2/12">
                    Category Icon
                  </th>

                  <th className="text-start font-bold  w-7/12">
                    Category Name
                  </th>
                  <th className="text-start font-bold  w-1/12">Action</th>
                </tr>
              </thead>
              {Array.isArray(displayedData) && displayedData.length > 0 && (
                <tbody>
                  {displayedData?.map((rowData, index) => (
                    <tr
                      key={index}
                      className="even:bg-mygraytable odd:bg-white "
                    >
                      <td className="align-middle bg-transparent whitespace-nowrap py-4  ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack ps-4">
                          {index}
                        </h6>
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <Image
                          src={img}
                          height={500}
                          width={500}
                          alt="err"
                          className="h-7 w-10"
                        />
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack font-medium">
                          {rowData}
                        </h6>
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <div className="flex items-center  gap-2">
                          <button onClick={() => handleCatEdit(rowData.id)}>
                            <EditIcon />
                          </button>
                          <button onClick={() => handleCatView(rowData.id)}>
                            <ViewIcon />
                          </button>
                          <button onClick={() => handleDeleteCat(rowData)}>
                            <DeleteIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
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
