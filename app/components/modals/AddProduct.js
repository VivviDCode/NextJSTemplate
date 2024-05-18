"use client";
import React, { useState } from "react";
import { EditIcon } from "../../../public/assets/Icons";

export default function AddProduct({ onAdd, onClose, isOpenAddModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  const handleUpdate = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!price) newErrors.price = "Price is required";
    if (!category) newErrors.category = "Category is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onAdd({ title, description, price, category });
      onClose();
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setErrors("");
    }
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpenAddModal ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <form onSubmit={handleUpdate}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-[100%]">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900 border-b-orange-100"
                    id="modal-title"
                  >
                    Add Product
                  </h3>
                  <div className="mt-2 flex flex-col">
                    <label className="text-sm text-black-500 my-2">Title</label>
                    <input
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                      className="border w-full rounded-md p-2"
                      value={title}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 flex flex-col">
                    <label className="text-sm text-black-500 my-2">Price</label>
                    <input
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                      className="border w-full rounded-md p-2"
                      value={price}
                    />
                    {errors.price && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.price}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 flex flex-col">
                    <label className="text-sm text-black-500 my-2">
                      Category
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setCategory(e.target.value)}
                      className="border w-full rounded-md p-2"
                      value={category}
                    />
                    {errors.category && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.category}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 flex flex-col">
                    <label className="text-sm text-black-500 my-2">
                      Description
                    </label>
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      className="border w-full rounded-md p-2"
                      value={description}
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={onClose}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
              <button
                type="submit"
                className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
