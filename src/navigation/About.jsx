import React from "react";
import AboutMe from "../content/AboutMe";
import Service from "../content/Service";
import Clients from "../content/Clients";
import WhyMe from "../AboutMe/WhyMe";
import ContactMe from "../AboutMe/ContactMe";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

const About = () => {
  return (
    <>
      <AboutMe />

      {/* <WhyMe /> */}

      {/* <HorizontalScrollCarousel /> */}

      <ContactMe />
      {/* what i do section start */}
      <Service />
      {/* what i do section ends */}

      {/* clients section start */}
      {/* <Clients /> */}
      {/* clients section start */}
    </>
    // <a className="menu-active" href="aboutOne.html">
    //                             <span className="text-xl mb-1">
    //                                 <i className="fa-regular fa-user"></i>
    //                             </span> About </a>
  );
};

export default About;
