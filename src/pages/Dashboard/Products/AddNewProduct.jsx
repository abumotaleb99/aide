import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Token;

const AddNewProduct = () => {
  useEffect(() => {
    document.title = "AIDE | Add New Product";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { product_name, weight } = data;

          const price = parseFloat(data.price);

          const newProduct = {
            product_name,
            weight,
            price,
            image: imgURL,
          };

          fetch("https://aide-server-green.vercel.app/add-new-product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              //   console.log(data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  title: "Success!",
                  text: "Product Added Successfully!",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            });
        }
      });
  };

  return (
    <div className="">
      <h2 className="text-3xl text-[#975EFE] font-medium py-6">
        Add New Product
      </h2>
      <div className="bg-white rounded-md shadow-md p-4">
        {/* Add New Product Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label className=" text-base font-semibold">Product Name</label>
            <input
              type="text"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              defaultValue=""
              {...register("product_name", { required: true })}
            />
            {errors.instructor_email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mb-2 md:grid grid-cols-2 gap-5">
            <div>
              <label className=" text-base font-semibold">Weight (Liter)</label>
              <input
                type="text"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                required
                {...register("weight", { required: true })}
              />
              {errors.available_seats && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div>
              <label className=" text-base font-semibold">Price</label>
              <input
                type="text"
                className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
                required
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="mb-2">
            <label className=" text-base font-semibold">Product Photo</label>
            <input
              type="file"
              className="w-full border rounded-md focus:outline-none  px-3 py-2 mt-2"
              required
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="mt-6">
            <input
              type="submit"
              className="w-full md:w-1/2 text-sm text-white bg-[#975EFE] font-medium uppercase rounded cursor-pointer py-[7px]"
              value="Add New Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
