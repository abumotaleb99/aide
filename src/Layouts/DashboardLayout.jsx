import React, { useContext, useState } from "react";
import {
  FaArrowAltCircleLeft,
  FaBell,
  FaCopy,
  FaMoon,
  FaNotesMedical,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`bg-[#F4F5FA] w-64 min-h-screen fixed left-0 top-0 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        {/* Sidebar Content */}
        <div className="px-5 py-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg text-[#3A3541DE] font-bold uppercase">
              Assignment
            </h2>
            <button onClick={toggleSidebar}>
              <FaArrowAltCircleLeft className=" text-[#975EFE] text-xl" />
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-3">
                <Link to="" className="flex items-center text-[#3A3541DE]">
                  <FaNotesMedical className="text-xl" />
                  <p className="font-normal ml-3">All Employee</p>
                </Link>
              </li>
              <li className="mb-3">
                <Link to="" className="flex items-center text-[#3A3541DE]">
                  <FaUser className="text-xl" />
                  <p className="font-normal ml-3">Add Employee</p>
                </Link>
              </li>
              <li>
                <Link to="" className="flex items-center text-[#3A3541DE]">
                  <FaCopy className="text-xl" />
                  <p className="font-normal ml-3">All Product</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Navbar */}
        <div className="bg-[#F4F5FA] flex justify-between md:justify-end items-center px-4 lg:px-5">
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              <FaArrowAltCircleLeft className=" text-[#975EFE] text-xl" />
            </button>
          </div>

          <div className="flex items-center gap-3 py-2 lg:py-3">
            <FaMoon className="text-xl text-[#3A3541DE]" />
            <FaBell className="text-xl text-[#3A3541DE]" />
            <div className="flex items-center justify-center">
              <img
                src={user?.image}
                alt="Image"
                className="rounded-full h-10 w-10"
              />
            </div>
          </div>
        </div>
        <h2>Main COntent</h2>
      </main>
    </div>
  );
};

export default DashboardLayout;
