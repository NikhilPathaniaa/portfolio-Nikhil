import React, { useEffect, useState } from 'react';
import './Style.css';
import Nav1 from '../mobileResponsive/Nav1';

const DayNight = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in local storage or by the user's system preference
    const isDarkModeEnabled =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Set the initial state
    setIsDarkMode(isDarkModeEnabled);

    // Apply dark mode class to the document element if dark mode is enabled
    if (isDarkModeEnabled) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkModeState = !isDarkMode;
    setIsDarkMode(updatedDarkModeState);

    // Update local storage with the new theme preference
    localStorage.setItem('color-theme', updatedDarkModeState ? 'dark' : 'light');

    // Toggle the 'dark' class on the document element
    document.documentElement.classList.toggle('dark', updatedDarkModeState);
  };

  return (
    <div className="section-bg">
      <div className="w-full flex justify-between px-4">
        <div>
          <img className="h-[26px] lg:h-[32px]" src="images/logo/logo.png" alt="logo" />
        </div>
        <div className="flex items-center">
          {/* Dark mode toggle button */}
          <button
            id="theme-toggle"
            type="button"
            className="dark-light-btn"
            onClick={toggleDarkMode}
          >
            <i id="theme-toggle-dark-icon" className={`fa-solid text-xl ${isDarkMode ? 'fa-moon' : 'fa-sun'} hidden`}></i>
            <i id="theme-toggle-light-icon" className={`fa-solid text-xl ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            {/* {isDarkMode ? 'fa-sun' : 'fa-moon'} */}
          </button>

          {/* Mobile toggle button */}
          <Nav1/>
          
        </div>
      </div>
    </div>
  );
};

export default DayNight;
