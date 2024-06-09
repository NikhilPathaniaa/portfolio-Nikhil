import React from 'react'

const Address = () => {
  return (
    <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                            <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                                <p className="dark:text-white">Bangalore, India</p>
                            </div>
    </div>
  )
}

export default Address