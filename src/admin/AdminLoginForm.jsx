import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    // Send data to the server
    try {
      const response = await fetch("https://portfolio-back-g5on.onrender.com/find-User", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add query or request");
      }
      // Clear input fields

      setEmail("");
      setPassword("");

      setSubmitStatus("success");
      // Clear the success message after a certain time
      setTimeout(() => setSubmitStatus(null), 3000);

      navigate("/Admin");
    } catch (error) {
      console.error("Error adding comment:", error);
      // Set submit status to error
      setSubmitStatus("error");
    }
  };

  return (
    <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <h2 className="after-effect after:left-60 after:top-[76px] mb-12 md:mb-[30px] pl-4 md:pl-[60px] pt-12">Admin</h2>
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
        <h3 className="text-4xl">
          <span className="text-gray-lite dark:text-[#A6A6A6]"> 😈 Only Admin can enter 😈 </span>
          <br />
          <span className="font-semibold dark:text-white">🤫 Confidencial data hidden !!! 🤫</span>
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Form inputs */}

          <div className="relative z-0 w-full mt-[40px] mb-8 group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Email *
            </label>
          </div>

          <div className="relative z-0 w-full mb-8 group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
              placeholder=" "
              id="password"
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
              Password *
            </label>
          </div>

          {/* Submit button */}
          <input
            type="submit"
            className="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
          />
          <br />
          <br />
          {submitStatus === "success" && (
            <span style={{ color: "green" }} className="block mt-2 text-green-500 transform transition-all duration-500 ease-in-out animate-bounce">
              Please Enter!
            </span>
          )}
          {submitStatus === "error" && (
            <span style={{ color: "red" }} className="block mt-2 text-red-500 transform transition-all duration-500 ease-in-out animate-pulse">
              🤪 Moye Moye🤪!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
