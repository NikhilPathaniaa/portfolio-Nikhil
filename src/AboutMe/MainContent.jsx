import React, { useEffect, useState } from "react";

const MainContent = () => {
  return (
    <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
      <div className="col-span-12 space-y-2.5">
        <div className="lg:mr-16">
          <p className="text-[#44566c] dark:text-color-910 leading-7">
            Hey there! I'm <span className="text-[#FA5252]">Nikhil Pathania</span>, your web magician here to make your online dreams a reality. I specialize in crafting stunning websites and web applications tailored to your unique needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
