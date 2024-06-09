import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname); // Set the active link initially

  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path) => {
    setActiveLink(path);
    setShouldCloseMenu(true); // Set shouldCloseMenu to true when a menu item is clicked
  };

  useEffect(() => {
    if (shouldCloseMenu) {
      setMenuOpen(false);
      setShouldCloseMenu(false); // Reset shouldCloseMenu after closing the menu
    }
  }, [shouldCloseMenu]); // Only run the effect when shouldCloseMenu changes

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav id="navbar" className={menuOpen ? "lg:hidden block" : "lg:hidden hidden"}>
        <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
          <li>
            <Link className={activeLink === "/About" ? "mobile-menu-items-active" : "mobile-menu-items"} to="/About" onClick={handleMenuItemClick}>
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-user"></i>
              </span>
              About
            </Link>
          </li>
          <li>
            <Link className={activeLink === "/Resume" ? "mobile-menu-items-active" : "mobile-menu-items"} to="/Resume" onClick={handleMenuItemClick}>
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-file-lines"></i>
              </span>
              Resume
            </Link>
          </li>
          <li>
            <Link className={activeLink === "/Portfolio" ? "mobile-menu-items-active" : "mobile-menu-items"} to="/Portfolio" onClick={handleMenuItemClick}>
              <span className="mr-2 text-xl">
                <i className="fas fa-briefcase"></i>
              </span>
              Works
            </Link>
          </li>
          <li>
            <Link className={activeLink === "/Blogs" ? "mobile-menu-items-active" : "mobile-menu-items"} to="/Blogs" onClick={handleMenuItemClick}>
              <span className="mr-2 text-xl">
                <i className="fa-brands fa-blogger"></i>
              </span>
              Blogs
            </Link>
          </li>
          <li>
            <Link className={activeLink === "/Contact" ? "mobile-menu-items-active" : "mobile-menu-items"} to="/Contact" onClick={handleMenuItemClick}>
              <span className="mr-2 text-xl">
                <i className="fa-brands fa-blogger"></i>
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleMenu} id="menu-toggle" type="button" className="menu-toggle-btn">
        <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl"></i>
        <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden"></i>
      </button>
    </>
  );
};

export default Nav1;
