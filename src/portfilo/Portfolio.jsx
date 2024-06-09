import React, { useState } from "react";
import PopUp1 from "./PopUp1";

const Portfolio = (props) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <div className="portfolio_list-two-items isotop-item plugin custom ">
        <div className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]" key={props.id}>
          <div onClick={() => setShowModel(true)} className="overflow-hidden rounded-lg">
            <img className="w-full z-0 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src={props.image} alt="portfolio image" />
          </div>
          <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">Web Developer</span>
          <button onClick={() => setShowModel(true)} className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
            {props.title}
            {props.id}
          </button>
        </div>

        {showModel && <PopUp1 title={props.title} id={props.id} video={props.video} content={props.content} preview={props.preview} client={props.client} languages={props.languages} onClose={() => setShowModel(false)} />}
      </div>
    </>
  );
};

export default Portfolio;
