import React from "react";

const Product = ({ product }) => {
  const { id, image, productName, weight, price } = product;

  return (
    <div className="bg-white shadow-md flex flex-col justify-between rounded-lg">
      <div className="w-full max-h-56 flex justify-center mt-1">
        <img src={image} className="" alt="" />
      </div>
      <div>
        <div className="p-4">
          <h3 className="text-sm text-[#212121] font-normal">{productName}</h3>
          <p className="text-xs text-[#828282] font-normal py-2">{weight}</p>
          <p className="text-base text-[#009999]">
            $<span className="font-bold">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center border border-[#009999] rounded-md mx-4 mb-2">
        <button className="text-base text-[#009999] font-semibold  py-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
