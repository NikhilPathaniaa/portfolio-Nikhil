import React from 'react'

const Service = () => {
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                        <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                        
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                            <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                                <img className="w-10 h-10 object-contain block" src="images/icons/wordpress.svg"
                                    alt="icon" />
                                <div className="space-y-2">
                                    <h3 className="dark:text-white text-[22px] font-semibold"> Wordpress</h3>
                                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                        amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                </div>
                            </div>

                            <div class="about-box bg-[#fefaf0] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="images/icons/spring.svg"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> SpringBoot</h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                    </div>
                            </div>

                            <div class="about-box bg-[#f3faff] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="images/icons/reactjs.svg"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> React </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                    </div>
                            </div>

                            <div class="about-box bg-[#fff4f4] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="images/icons/database2.png"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> Database </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                    </div>
                            </div>
                            <div class="about-box bg-[#fff4f4] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="images/icons/RestApi.png"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> Rest Api </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                    </div>
                            </div>

                            <div class="about-box bg-[#fff4f4] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="images/icons/web-design.png"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> Web Design </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit
                                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
                                    </div>
                            </div>

                        </div>
                    </div>
  )
}

export default Service