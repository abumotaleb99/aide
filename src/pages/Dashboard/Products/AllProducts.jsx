import React, { useEffect, useState } from "react";
import { FaGreaterThan, FaLessThan, FaUpload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllProducts = () => {
  useEffect(() => {
    document.title = "AIDE | All Products";
  }, []);

  const [products, setProducts] = useState([]);
  let [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const { totalProducts } = useLoaderData();

  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://aide-server-green.vercel.app/products?page=${currentPage}&limit=${productsPerPage}`
      );

      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, productsPerPage]);

  const options = [5, 10, 20];
  function handleSelectChange(event) {
    setProductsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="mb-5">
      <h2 className="text-3xl text-[#975EFE] font-medium py-6">All Products</h2>
      <div className="bg-white rounded-md shadow-md">
        {/* Header */}
        <div className="md:flex justify-between items-center p-4">
          <div className="md:flex items-center gap-6">
            <button className="px-8 md:px-11 py-[7px] rounded border">
              <div className="inline-flex items-center justify-center">
                <FaUpload className="text-lg text-[#8A8D93]" />
                <p className="text-sm text-[#8A8D93] font-medium ml-2">PDF</p>
              </div>
            </button>
            <button className="px-8 md:px-11 py-[7px] rounded border">
              <div className="inline-flex items-center justify-center">
                <FaUpload className="text-lg text-[#8A8D93]" />
                <p className="text-sm text-[#8A8D93] font-medium ml-2">EXCEL</p>
              </div>
            </button>
            <button className="px-8 md:px-11 py-[7px] rounded border">
              <div className="inline-flex items-center justify-center">
                <FaUpload className="text-lg text-[#8A8D93]" />
                <p className="text-sm text-[#8A8D93] font-medium ml-2">PRINT</p>
              </div>
            </button>
            <button className="px-8 md:px-11 py-[7px] rounded border">
              <div className="inline-flex items-center justify-center">
                <FaUpload className="text-lg text-[#8A8D93]" />
                <p className="text-sm text-[#8A8D93] font-medium ml-2">
                  SHOW/HIDE COLUMN
                </p>
              </div>
            </button>
          </div>

          <Link
            to="../add-new-product"
            className="text-sm text-white bg-[#975EFE] font-medium uppercase rounded px-8 md:px-11 py-[7px]"
          >
            +Add New Product
          </Link>
        </div>
        {/* Table */}
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#F9FAFC]">
              <th className="px-4 py-3 border-b-2  text-xs text-[#3A3541DE] font-semibold uppercase tracking-wider text-left">
                Image
              </th>
              <th className="px-4 py-3 border-b-2  text-xs text-[#3A3541DE] font-semibold uppercase tracking-wider text-left">
                Product Name
              </th>
              <th className="px-4 py-3 border-b-2  text-xs text-[#3A3541DE] font-semibold uppercase tracking-wider text-left">
                Weight
              </th>
              <th className="px-4 py-3 border-b-2  text-xs text-[#3A3541DE] font-semibold uppercase tracking-wider text-left">
                Price
              </th>
              <th className="px-4 py-3 border-b-2  text-xs text-[#3A3541DE] font-semibold uppercase tracking-wider text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product?._id}>
                <td className="px-4 py-4 border-b">
                  <img src={product?.image} className="h-12" alt="" />
                </td>
                <td className="px-4 py-4 border-b">
                  <p className="text-sm text-[#3A3541AD] font-normal">
                    {product?.product_name}
                  </p>
                </td>
                <td className="px-4 py-4 border-b">
                  <p className="text-sm text-[#3A3541AD] font-normal">
                    {product?.weight} <span>Liter</span>
                  </p>
                </td>
                <td className="px-4 py-4 border-b">
                  <p className="text-sm text-[#3A3541AD] font-normal">
                    $ {product?.price}
                  </p>
                </td>
                <td className="px-4 py-4 border-b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 128 512"
                    className="cursor-pointer"
                  >
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex justify-end items-center gap-6 p-4">
          <div className="flex items-center gap-2">
            <p className="text-base text-[#3A3541AD] font-medium">
              Rows per page:
            </p>
            <select value={productsPerPage} onChange={handleSelectChange}>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-base text-[#3A3541DE] font-medium">
              1-5 of {totalPages}
            </p>
          </div>
          <div className="flex gap-6">
            <button onClick={handlePrevPage}>
              <FaLessThan className="text-sm" />
            </button>
            <button onClick={handleNextPage}>
              <FaGreaterThan className="text-sm " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
