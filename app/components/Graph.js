import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

export default function Graph() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Series A",
        data: [25, 30, 25, 20, 15, 18, 20, 25, 30, 25, 20, 30],
        borderColor: "#34C759",
        backgroundColor: "#34C759",
        pointRadius: 0.5,
        borderWidth: 3,
        tension: 0.5,
      },
      {
        label: "Series B",
        data: [15, 18, 20, 25, 30, 25, 28, 30, 25, 20, 18, 15],
        borderColor: "#1886FE",
        backgroundColor: "#1886FE",
        pointRadius: 0.5,
        borderWidth: 3,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: "#2E343E60",
          stepSize: 10,
        },
        border: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 30,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: "#2E343E90",
        },
        border: {
          display: true,
        },
      },
    },
    layout: {
      padding: {
        top: 30,
        bottom: 0,
        left: 0,
        right: 0,
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
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
