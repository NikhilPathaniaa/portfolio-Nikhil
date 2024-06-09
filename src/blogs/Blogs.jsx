import React, { useState } from "react";
import BlogsPopUp from "./BlogsPopUp";

const Blogs = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12 ">
            <h2 className="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
              {/* blog items one start */}
              <div class="p-5 rounded-lg mb-2 h-full bg-[#fcf4ff] dark:bg-transparent dark:border-[#212425] dark:border-2">
                <div onClick={() => setShowModel(true)} class="overflow-hidden rounded-lg">
                  <img class="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110" src="images/errors/comingsoon.png" alt="blog image" />
                </div>
                <div class="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                  <span>Very Soon</span>
                  <span class="dot-icon">Inspiration</span>
                </div>
                <h3 onClick={() => setShowModel(true)} class="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                  <a href="#ex1" rel="modal:open">
                    Comming Soon....
                  </a>
                </h3>
              </div>
              {/* blog items one end */}
            </div>
          </div>
        </div>
      </section>
      {/* blog section end */}

      {/* modal  for item one start */}
      {/* {showModel && <BlogsPopUp onClose={() => setShowModel(false)} />} */}
    </div>
  );
};

export default Blogs;
