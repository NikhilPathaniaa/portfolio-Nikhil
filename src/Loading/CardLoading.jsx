import React from "react";
const CardLoading = () => {
  return (
    <div className="portfolio_list-two-items isotop-item plugin custom ">
      <div className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
        <div className="overflow-hidden rounded-lg">
          <img className="w-full z-0 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src="#" alt="portfolio image" />
        </div>
        <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web Developer</span>
        <button className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
          <div className="btn btn-1"></div>
        </button>
      </div>
    </div>
  );
};

export default CardLoading;
