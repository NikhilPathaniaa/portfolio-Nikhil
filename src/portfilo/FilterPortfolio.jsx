import React, { useEffect, useState } from "react";
import Portfolio from "./Portfolio";

const FilterPortfolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost/find/Post")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12 ">
            <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>
            <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] grid gap-x-10 gap-y-7 mb-6">
              {/* portfolio items one start */}

              {data.map((values) => (
                <Portfolio key={values.id} id={values.id} title={values.title} image={values.image} video={values.video} languages={values.languages} content={values.content} client={values.client} preview={values.preview} />
              ))}
              {/* ) : (
                            <div className="portfolio_list-two-items isotop-item plugin custom ">
                            <div
                                className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                                <div className="overflow-hidden rounded-lg">
                                        <img className="w-full z-0 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                            src="../images/errors/noContent.png" alt="portfolio image" />
                                </div>
                                <span
                                    className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">No Post Yet</span>
                                <button
                                    className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                     No Post Yet
                                </button>
                            </div>
                            </div>
                        )}*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterPortfolio;
