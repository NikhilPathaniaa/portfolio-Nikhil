import { useEffect, useState } from "react"


const ShowComment = (props) => {

  const [timeDiff, setTimeDiff] = useState('');

  useEffect(() => {
    const calculateTimeDifference = () => {
      const commentDate = new Date(props.time);
      const currentDate = new Date();
      const timeDifference = currentDate - commentDate;
      const secondsDifference = Math.floor(timeDifference / 1000);

      // Convert seconds to minutes, hours, days, etc.
      if (secondsDifference < 60) {
        setTimeDiff('just now');
      } else if (secondsDifference < 3600) {
        setTimeDiff(`${Math.floor(secondsDifference / 60)} minutes ago`);
      } else if (secondsDifference < 86400) {
        setTimeDiff(`${Math.floor(secondsDifference / 3600)} hours ago`);
      } else {
        setTimeDiff(`${Math.floor(secondsDifference / 86400)} days ago`);
      }
    };

    calculateTimeDifference();

    // Update time difference every minute
    const interval = setInterval(calculateTimeDifference, 60000);

    return () => clearInterval(interval);
  }, [props.time]);




  const imageSize = {
    // width: '100px', // Adjust as needed
    height: '100px', // Adjust as needed
  };

  
  const space = {
    // border:'2px solid black',
    width: '100%' // Adjust as needed
    // marginLeft: '400px', // Adjust as needed

  };

  return (

    <div className="rounded-lg mt-6 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px] mr-3">
        <div className="dark:bg-[#232220] bg-[#ffffff] flex p-4 rounded-lg" key={props.id}>
                                    
                            <div>
                                <img style={imageSize} className="md:w-[125px] rounded-xl" src={props.image} alt="alt images" />
                            </div>
                            <div className="pl-5" style={space}> 
                                <div className="flex justify-between items-center">
                                    <h3 className="dark:text-white text-[22px] font-medium">{props.name}</h3>
                                    <span className="dark:text-[#dedede] mr-10 text-tiny self-end" >{timeDiff}</span>
                                </div>
                                <p className="dark:text-white md:pr-16">{props.message}</p>
                                {/* <button className="dark:text-[#dedede] text-tiny hover:text-[#FA5252] dark:hover:text-[#FA5252]">Reply</button> */}
               
                            </div>
        </div>
    </div>
  )
}

export default ShowComment