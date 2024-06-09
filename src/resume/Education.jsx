import React from 'react'
import Mca from './Mca'
import Bca from './Bca'

const Education = () => {
  return (
    <div>
        <div className="flex items-center space-x-2 mb-4">
            <i className="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
            <h4 className="text-5xl dark:text-white font-medium"> Education </h4>
        </div>
        <Mca/>
        <Bca/>
    </div>
  )
}

export default Education