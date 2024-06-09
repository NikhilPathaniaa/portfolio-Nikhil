import React from 'react'

const ClientsCount = (props) => {
  return (
    <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
        <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg" key={props.id}>
                                    
                            {/* <div>
                                <img className="md:w-[125px] rounded-xl" src="images/about/about.jpg" alt="blog image" />
                            </div> */}
                            <div className="pl-5">
                                <p>Id : {props.id}</p>
                                <div className="flex justify-between items-center">
                                    <h3 className="dark:text-white   font-medium">Name : {props.name}</h3>
                                    {/* <span className="dark:text-[#dedede] text-tiny">15 min ago</span> */}
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="dark:text-white  font-medium">Email : {props.email}</h3>
                                    {/* <span className="dark:text-[#dedede] text-tiny">15 min ago</span> */}
                                </div>
                                <p className="dark:text-white md:pr-16">Message : {props.message}</p>
                               
            </div>
        </div>
    </div>
  )
}

export default ClientsCount