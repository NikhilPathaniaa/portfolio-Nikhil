import React from "react";

const WhyMe = () => {
  return (
    <div className="bg-[#f3faff] dark:bg-transparent relative">
      <div className="container px-4 py-8 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Me?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Versatile Solutions</h3>
            <p className="text-gray-700">Whether you prefer custom coding or the convenience of platforms like WordPress, I've got you covered.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Responsive Design</h3>
            <p className="text-gray-700">I prioritize responsive web design to ensure your app looks and works flawlessly across all devices.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Tailored Approach</h3>
            <p className="text-gray-700">Your project is unique, and I'm here to ensure it stands out with responsive designs and robust backend systems.</p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-8 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Tech Savvy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Versatility</h3>
            <p className="text-gray-700">Whether it's ReactJS for stunning frontends or Spring Boot for robust backend solutions, I've got the tools for every job.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Design Savvy</h3>
            <p className="text-gray-700">I craft sleek interfaces with Tailwind CSS and bring ideas to life with Figma to ensure pixel-perfect precision.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Data Dynamo</h3>
            <p className="text-gray-700">From databases to APIs, I've got you covered, ensuring seamless integration and functionality.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Let's Talk Tech</h3>
            <p className="text-gray-700">Fluent in geek speak, I'm here to understand your vision and bring it to life with precision and passion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMe;
