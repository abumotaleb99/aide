import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  FaTruck,
  FaSearchLocation,
  FaRegSun,
  FaCartPlus,
  FaUser,
  FaSearch,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = (
    <>
      <li className="flex items-center gap-1">
        <FaCartPlus className="text-lg text-[#008ECC]" />
        <NavLink to="/cart" className="text-base text-[#666666] font-bold">
          Cart
        </NavLink>
      </li>
      <li className="flex items-center gap-1">
        <FaUser className="text-lg text-[#008ECC]" />
        <NavLink to="/sign-up" className="text-base text-[#666666] font-bold">
          Sign Up
        </NavLink>
        /
        <NavLink to="/sign-in" className="text-base text-[#666666] font-bold">
          Sign In
        </NavLink>
      </li>
      <li className="flex items-center gap-1">
        <FaUser className="text-lg text-[#008ECC]" />
        <NavLink to="/admin" className="text-base text-[#666666] font-bold">
          Admin
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full md:max-w-[1440px] mx-auto px-4 lg:px-5">
      {/* Header Top */}
      <div className="flex justify-end md:justify-between items-center py-[7px]">
        <p className="hidden md:block md:text-sm text-[#666666]">
          Assignment of AIDE
        </p>

        <div className="flex gap-4 md:gap-8">
          <div className="flex items-center gap-1">
            <FaSearchLocation className="text-xs md:text-sm text-[#008ECC]" />
            <p className="text-xs md:text-sm text-[#666666]">
              Deliver to <span className="font-medium">562546</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaTruck className="text-xs md:text-sm text-[#008ECC]" />
            <p className="text-xs md:text-sm text-[#666666]">
              Track your order
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegSun className="text-xs md:text-sm text-[#008ECC]" />
            <p className="text-xs md:text-sm text-[#666666]">All Offers</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="relative flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-[#008ECC]">
          Md. Abu Motaleb
        </Link>

        {/* Search Bar */}
        <div class="relative w-full md:max-w-md max-w-xs mx-auto rounded-md hidden lg:block">
          <div class="absolute top-1/2 left-0 -translate-y-1/2 ml-3">
            <FaSearch className="text-lg text-[#008ECC]" />
          </div>
          <div class="absolute top-1/2 right-0 -translate-y-1/2 mr-3">
            <FaBars className="text-xl text-[#008ECC]" />
          </div>
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
            class="w-full px-4 py-2 rounded-md pl-10 pr-10 bg-[#F3F9FB] border border-[#008ECC] focus:border-[#4D90FE] focus:outline-none"
          />
        </div>

        {/* Nav Items */}
        <ul className="items-center hidden space-x-5 lg:flex">{navItems}</ul>

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
                  <Link to="/" className="text-xl font-bold text-[#008ECC]">
                    Md. Abu Motaleb
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
                    <li>
                      <div class="relative w-full md:max-w-md max-w-xs rounded-md">
                        <div class="absolute top-1/2 left-0 -translate-y-1/2 ml-3">
                          <FaSearch className="text-lg text-[#008ECC]" />
                        </div>
                        <div class="absolute top-1/2 right-0 -translate-y-1/2 mr-3">
                          <FaBars className="text-xl text-[#008ECC]" />
                        </div>
                        <input
                          type="text"
                          placeholder="Search..."
                          class="w-full px-4 py-2 rounded-md pl-10 pr-10 bg-[#F3F9FB] border border-[#008ECC] focus:border-[#4D90FE] focus:outline-none"
                        />
                      </div>
                    </li>
                    {navItems}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
