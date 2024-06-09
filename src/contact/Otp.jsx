import React, { useState, useRef } from "react";

const Otp = ({ id, onClose }) => {
  const [otp, setOtp] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);
  let status = true;

  const modelRef = useRef();

  const overlayStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999, // Higher z-index to overlay everything behind
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const onChange = (e) => {
    if (modelRef.current === e.target) {
      status = false; // Set submit status to false when closing the modal
      console.log(status);
      // console.log(currentStatus);
      onClose();
      handleSubmit(e); // Call handleSubmit function when onChange event is triggered
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost/submit-otp?otp=${otp}&id=${id}&status=${status}`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
      });
      if (!response.ok) {
        console.log("Failed to verify OTP");
      }
      const resultFromBackend = await response.text();
      console.log(resultFromBackend);
      // Clear input fields
      setOtp("");
      if (resultFromBackend == "success") {
        onClose();
        console.log(resultFromBackend);
      } else if (resultFromBackend == "failure") {
        setSubmitStatus("error");
      }

      // Set submit status to true when OTP verification is successful
      // Print submit status in console

      //Clear the success message after a certain time
      setTimeout(() => setSubmitStatus(null), 3000);

      // Close the modal if the submission is successful
      // onClose();
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setSubmitStatus("error");
      console.log(status); // Print submit status in console
    }
  };

  return (
    <div style={overlayStyles} ref={modelRef} onClick={onChange}>
      <div id="portfiloOne" className=" modal-container popup">
        <div className="pr-3 pb-2 ">
          <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">Web Developer Project {id}</h2>
          {submitStatus === "error" && <span style={{ color: "red" }}>Wrong OTP</span>}
          <form className="w-full rounded px-8 py-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <span className="dark:text-white text-[25px] font-medium">Enter Your OTP:</span>
              <input
                autoFocus
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style={{ border: "2px solid black" }}
                id="otp"
                type="number"
                placeholder="Enter OTP"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Verify
              </button>
            </div>
          </form>
        </div>

        <div className="text-center">
          If you want to cancel the process <br /> <span className="text-[#FA5252]">click outside the box 📤</span>
        </div>
      </div>
    </div>
  );
};

export default Otp;
