import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsFetch } from "../saga-redux/redux/ProductsSlice";
Chart.register(CategoryScale);

export default function Graph() {
  const dispatch = useDispatch()
  const  products = useSelector((state) => state.Products?.allProducts);
  useEffect(() => {
    dispatch(getAllProductsFetch());
  }, [dispatch]);

  const categoryCounts = {};
  products?.products?.forEach((product) => {
    const category = product.category;
    if (category in categoryCounts) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });
  const categories = Object.keys(categoryCounts);
  const counts = Object.values(categoryCounts);

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Category Counts",
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Green
          "rgba(153, 102, 255, 0.6)", // Purple
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        hoverBorderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        data: counts,
      },
    ],
  };

  // Define options for the bar chart
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 0.5,
          suggestedMax: 10, // Set your desired maximum value here
        },
      },
    },
  };

  return (
    <div className="w-full max-w-full mt-0 mb-6 lg:mb-0 lg:w-[79.5%] lg:flex-none xl:max-h-[330px] xl:min-h-[330px]">
      
      <div className="flex flex-wrap  min-h-full">
        <div className="w-full max-w-full px-2 mt-0 lg:flex-none">
          <div className="p-6 min-h-full  relative z-20 flex min-w-0 flex-col break-words rounded-3xl border-0 border-solid bg-white bg-clip-border">
            <div className="flex items-center gap-5  rounded-t-2xl border-b-0 border-solid">
              <div className="flex text-sm items-center  gap-4">
                <button className="capitalize text-myblack font-bold">
                  Users
                </button>
                <button className="text-disablelighttext font-medium">
                  Ads Listed
                </button>
                <button className=" text-disablelighttext font-medium">
                  Ads Sold
                </button>
              </div>
              <hr className="bg-black h-[15px] m-0 w-[1px]" />
              <div className="flex text-[12px] gap-5 text-black">
                <p>today</p>
                <p>Yesterday</p>
              </div>
            </div>
            <div className="flex-auto  min-h-full ">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
