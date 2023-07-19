import React from "react";

const DashboardHome = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:gap-8">
        <div className="flex flex-col items-center border p-8 mt-5">
          <h2 className="text-2xl text-[#3A3541DE] font-bold">
            Total Employee
          </h2>
          <p className="text-5xl text-[#975EFE] font-semibold mt-2">30</p>
        </div>
        <div className="flex flex-col items-center border p-8 my-5">
          <h2 className="text-2xl text-[#3A3541DE] font-bold">
            Total Products
          </h2>
          <p className="text-5xl text-[#975EFE] font-semibold mt-2">20</p>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
