import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Knowledge from './knowledge'
import Skills from './Skills'
const Resume = () => {
  return (
    <div>
                    {/* resume section start */}
                    <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
                        <div className="container sm:px-5 md:px-10 lg:px-14">
                            <div className="py-12 px-4 md:px-0">
                                {/* resume page title */}
                                <h2 className="after-effect after:left-44">Resume</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                                    {/* eductation start */}
                                    <Education/>
                                    {/* eductation end */}

                                    {/* experiment start */}
                                    <Experience/>
                                    {/* experiment start */}
                                </div>
                            </div>
                        </div>


                        {/* working section start */}
                        <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Skills/>
                                <Knowledge/>
                            </div>
                        </div>
                        {/* working section end */}
                    </div>
                    {/* resume section start */}
                </div>
  )
}

export default Resume