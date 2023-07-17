import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3CenterLeftIcon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#00D775]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-me"
          className={({ isActive }) => (isActive ? "text-[#28b76b]" : "")}
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "text-[#28b76b]" : "")}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-[#28b76b]" : "")}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="border-b-2">
      <div className="w-full md:max-w-7xl mx-auto px-4 py-5 lg:px-5">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl lg:text-2xl font-bold tracking-wide ">
            Abu Motaleb
          </Link>

          {/* Nav Items */}
          <ul className="items-center hidden space-x-7 lg:flex">{navItems}</ul>

          <a href="resume.pdf" target="_blank" type="submit">
            <button className="text-white bg-[#00D775] hover:bg-[#28b76b] transition-colors duration-200 px-6 py-2 rounded md:mr-5  hidden lg:block">
              <div className="inline-flex items-center justify-center">
                <p className="mr-2">Resume</p>
                <DocumentTextIcon className="w-5 text-white" />
              </div>
            </button>
          </a>

          {/* Mobile Navbar */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button title="Open Menu" onClick={() => setIsMenuOpen(true)}>
              <Bars3CenterLeftIcon className="w-7 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button */}
                  <div className="flex items-center justify-between mb-4">
                    <Link to="/" className="text-xl font-bold tracking-wide">
                      Abu Motaleb
                    </Link>
                    {/* Dropdown Close Button */}
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-7 text-gray-600" />
                    </button>
                  </div>
                  {/* Mobile Nav Items*/}
                  <nav>
                    <ul className="space-y-4">
                      {navItems}
                      <li>
                        <button className="text-white bg-[#00D775] hover:bg-[#28b76b] transition-colors duration-200 px-6 py-2 rounded md:mr-5">
                          <div className="inline-flex items-center justify-center">
                            <p className="mr-2">Resume</p>
                            <DocumentTextIcon className="w-5 text-white" />
                          </div>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
