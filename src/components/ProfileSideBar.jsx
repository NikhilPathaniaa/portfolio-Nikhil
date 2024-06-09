import React from 'react'
import FaceBool from '../profile/FaceBool'
import Instagram from '../profile/Instagram'
import Github from '../profile/Github'
import LinkedIn from '../profile/LinkedIn'
import Address from '../profile/Address'
import Email from '../profile/Email'
import Image from '../profile/Image'
import Designation from '../profile/Designation'

const ProfileSideBar = () => {
  return (
    <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                {/* profile image */}
                <Image/>
                <div className="pt-[100px] pb-8">
                    <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Nikhil Pathania </h2>
                    <Designation/>
                    <div className="flex justify-center space-x-3">
                        {/* <FaceBool/>
                        <Instagram/> */}
                        <Github/>
                        <LinkedIn/>
                    </div>
                    {/* personal infomation start */}
                    <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                        <Email/>
                        <Address/>
                    </div>
                    {/* personal infomation end*/}
                    {/* dowanload button */}
                    <button className="dowanload-btn"><img className="mr-3" src="images/icons/dowanload.png" alt="icon" /> Download Resume </button>
                </div>
            </div>
        </div>
  )
}

export default ProfileSideBar