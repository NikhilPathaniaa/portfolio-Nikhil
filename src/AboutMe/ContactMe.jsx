import React from "react";
import { Link } from "react-router-dom";
const ContactMe = () => {
  return (
    <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pt-5 pb-5"> Let's Connect! </h3>
      <div className="flex items-center">
        <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
          Ready to elevate your online presence? <br />
          Let's chat and turn your ideas into reality. <br />
          Hit me up and let's make digital dreams happen.
        </p>
        <Link to="/Contact" className="dowanload-btn">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
