import React, { useEffect, useState } from "react";
import Product from "./Product";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  const displayedProducts = showAllProducts ? products : products.slice(0, 5);

  return (
    <div className="w-full md:max-w-[1440px] mx-auto px-4 py-8 lg:px-5 lg:py-12">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-3xl font-semibold uppercase tracking-tight">
          Trending Now
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleProducts}
            className="text-sm text-[#0F5684] font-medium"
          >
            {showAllProducts ? "See Less" : "See all"}
          </button>
          <div className="flex gap-1">
            <button>
              <FaLessThan className="text-sm border-2 text-[#009999]" />
            </button>
            <button>
              <FaGreaterThan className="text-sm border-2 text-[#009999]" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 lg:pt-7">
        {showAllProducts ? (
          <>
            {products.reverse().map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </>
        ) : (
          <>
            {displayedProducts.reverse().map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TrendingProducts;
