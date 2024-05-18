import React from "react";

export default function Search({ onSearch }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 w-full"
        onChange={onSearch}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute inset-y-0 left-0 ml-3 mt-2 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
}
