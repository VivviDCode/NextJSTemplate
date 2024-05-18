"use client";
import React, { useEffect, useState } from "react";
import { DeleteIcon, EditIcon, MoveForward } from "@/public/assets/Icons";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateProductsFetch,
  deleteProductsFetch,
  getProductsFetch,
  onSearchProduct,
  onAddProduct,
} from "../saga-redux/redux/ProductsSlice";
import Image from "next/image";
import DeleteModal from "../components/modals/DeleteModal";
import UpdateProduct from "../components/modals/UpdateProduct";
import AddProduct from "../components/modals/AddProduct";
import Search from "./Search";

export default function Ads() {
  const [allProducts, setAllProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [itemId, setItemId] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const {
    products,
    searchProduct,
    isLoading,
  } = useSelector((state) => state.Products);
  const { total, limit = 10, skip } = products;
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  useEffect(() => {
    const skipValue = (pageNumber - 1) * limit;
    dispatch(getProductsFetch({ skip: skipValue, limit: !limit ? 10 : limit }));
  }, [dispatch, pageNumber, limit]);

  useEffect(() => {
    if (!products?.products) return;
    setAllProducts(products.products);
  }, [products]);

  useEffect(() => {
    if (!searchProduct?.products) return;
    setAllProducts(searchProduct.products);
  }, [searchProduct]);

  const handleNextPage = () => {
    const nextPageNumber = pageNumber + 1;
    const maxPage = Math.ceil(total / limit);
    if (nextPageNumber <= maxPage) {
      setPageNumber(nextPageNumber);
    }
  };
  const handlePrevPage = () => {
    const prevPageNumber = pageNumber - 1;
    if (prevPageNumber >= 1) {
      setPageNumber(prevPageNumber);
    }
  };

  const handleDelete = (itemId) => {
    setIsOpen(true);
    setItemId(itemId);
  };

  const handleUpdate = (data) => {
    setIsOpenUpdate(true);

    setUpdateData(data);
  };

  const onDelete = (itemId) => {
    dispatch(deleteProductsFetch(itemId));
    setIsOpen(false);
    setAllProducts(allProducts.filter((product) => product.id !== itemId));
  };

  const onUpdate = (data) => {
    const index = allProducts.findIndex((item) => item.id === data.id);
    if (index !== -1) {
      const updatedProducts = [...allProducts];
      updatedProducts[index] = data;
      setAllProducts(updatedProducts);
    }
    dispatch(UpdateProductsFetch(data));
  };

  const onCloseModal = () => {
    setIsOpen(false);
    setIsOpenUpdate(false);
    setIsOpenAddModal(false);
  };

  const handleAdd = (itemId) => {
    setIsOpenAddModal(true);
  };
  const onAdd = (data) => {
    dispatch(onAddProduct(data));
  };
  ;
  const onSearch = (e) => {
    const { value } = e.target;
    dispatch(onSearchProduct(value));
  };
  return (
    <div className="w-full max-w-full  mt-0 mb-6 lg:flex-none ">
      <DeleteModal
        isOpen={isOpen}
        onClose={onCloseModal}
        Delete={(e) => onDelete(e)}
        itemId={itemId}
      />
      <UpdateProduct
        isOpenUpdate={isOpenUpdate}
        onClose={onCloseModal}
        Update={(e) => onUpdate(e)}
        data={updateData}
        setTitle={setTitle}
        title={title}
      />
      <AddProduct
        isOpenAddModal={isOpenAddModal}
        onClose={onCloseModal}
        onAdd={(e) => onAdd(e)}
      />

      <div className="p-6 relative flex flex-col min-w-0 break-words bg-white border-0 rounded-3xl ">
        <div className=" pb-0 mb-0 rounded-t-4">
          <div className="flex justify-between">
            <h6 className="mb-2 text-lg text-black font-semibold">
              All Products
            </h6>

            <button className="text-sm text-disablelighttext flex justify-center items-center">
              Go to Ads Page <MoveForward />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <Search onSearch={onSearch} />
            <button
              onClick={() => handleAdd()}
              className="font-semibold p-2 rounded-sm outline-none border-none bg-slate-100"
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="overflow-x-auto pb-4 mt-3">
          <div className="min-h-[30rem]">
            <table className="items-center text-black text-[13px] w-full mb-4 align-top border-collapse border-gray-200 ">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Ad ID</th>
                  <th className="px-4 py-2 text-left font-medium">Image</th>
                  <th className="px-4 py-2 text-left font-medium">Brand</th>
                  <th className="px-4 py-2 text-left font-medium">Category</th>
                  <th className="px-4 py-2 text-left font-medium">Stock</th>
                  <th className="px-4 py-2 text-left font-medium">Price</th>
                  <th className="px-4 py-2 text-left font-medium">Rating</th>
                  <th className="px-4 py-2 text-left font-medium">Action</th>
                </tr>
              </thead>

              <tbody className="relative">
                {allProducts.length > 0 ? (
                  allProducts?.map((rowData, index) => (
                    <tr key={index} className="h-2">
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack">
                          {rowData.id}
                        </h6>
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack">
                          <Image
                            src={rowData.images[0]}
                            alt="err"
                            height={100}
                            width={100}
                            className="h-12 w-12 "
                          />
                        </h6>
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack font-medium">
                          {rowData.brand}
                        </h6>
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack font-medium">
                          {rowData.category}
                        </h6>
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack">
                          {rowData.stock}
                        </h6>
                      </td>
                      <td className="align-middle bg-transparent whitespace-nowrap ">
                        <h6 className="mb-0 text-sm leading-normal text-myblack font-medium">
                          {rowData.price}
                        </h6>
                      </td>
                      <td className=" py-3 align-middle bg-transparent whitespace-nowrap flex gap-1 ">
                        {StarRating(rowData.rating)}
                      </td>
                      <td className=" py-3 align-middle bg-transparent whitespace-nowrap space-x-2 ">
                        <button onClick={() => handleDelete(rowData.id)}>
                          <DeleteIcon />
                        </button>
                        <button onClick={() => handleUpdate(rowData)}>
                          <EditIcon />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {isLoading ? (
                      <td className="absolute top-[15rem] right-[35rem]">
                        Please Wait...!
                      </td>
                    ) : (
                      <td className="absolute top-[15rem] right-[35rem]">
                        Records Not Found..!
                      </td>
                    )}
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={handlePrevPage}
              disabled={pageNumber === 1}
              className="bg-white text-myblack rounded-lg px-3 py-1.5 mr-2 disabled:opacity-50"
            >
              Previous
            </button>
            <button>{pageNumber}</button>
            <button
              onClick={handleNextPage}
              disabled={pageNumber * limit >= total}
              className="bg-white text-myblack rounded-lg px-3 py-1.5 ml-2 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
