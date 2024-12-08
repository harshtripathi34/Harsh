import React, { useEffect, useState } from "react";
import { ProductExtraIamge } from "../components/ProductExtraIamge";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loader } from "../components/Loader/Loader";
export const AddItemsView = () => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [thumbnail, setThumbnail] = useState();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const [category, setCategory] = useState('');

  const [smallDescription, setSmallDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  const [isAdding, setIsAdding] = useState(false);

  const handleThumbnailChange = (e) => {
    const image = e.target.files[0];
    setThumbnail(image);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);

    setPrice(newPrice);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
  };

  const handleSmallDescriptionChange = (e) => {
    const newSmallDescription = e.target.value;
    setSmallDescription(newSmallDescription);
  };
  const handleFullDescriptionChange = (e) => {
    const newFullDescription = e.target.value;
    setFullDescription(newFullDescription);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !price ||
      !smallDescription ||
      !fullDescription ||

      !category || category=='select'||

      !thumbnail
    ) {
      toast.error("Please fill all input fields");
      return;
    }
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("smallDescription", smallDescription);
    formData.append("fullDescription", fullDescription);


    formData.append("thumbnail", thumbnail);
    formData.append("category", category);





    // **Logging FormData**
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    //sending data to server
    setIsAdding(true);
    fetch(`${SERVER_URL}/upload`, {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        if (response.ok) {
          const responeData = await response.json();

          if (responeData) {
            setIsAdding(false);
            toast.success("Product listed !", { position: "bottom-right" });
          }
        }
      })
      .catch((err) => {
        setIsAdding(false);

        toast.error("Unexpected error !");
      });
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="py-6 px-2 sm:px-10 text-start flex flex-col gap-4 "
      >
        {/* product Thumbnail */}
        <div className="flex flex-col gap-2">
          <h1>Add image</h1>
          <ProductExtraIamge 
            inputChange={handleThumbnailChange}
            fieldName={"thumbnail"}
          />



        </div>
        <div className="flex flex-col gap-2 ">
          <h1>Item name</h1>
          <input
            name="name"
            required
            onChange={handleNameChange}
            className="w-full px-2 py-1 border-2 border-[rgba(0,0,0,0.3)] outline-none"
            placeholder="Enter item name"
          />
        </div>

        {/*--catgory , price, subcategory */}
        <div className="w-full flex gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <h1>Category</h1>
            <select
              name="category"
              required
             value={category}
              onChange={handleCategoryChange}
              className="flex-1 px-2 py-1 border-2 border-[rgba(0,0,0,0.3)] outline-none"
              placeholder="category"
            >
              <option>select</option>
              <option>Burgers</option>
              <option>Pizza</option>
              <option>Pasta</option>
              <option>Coffee</option>
              <option>Sandwiches</option>
              <option>Sushi</option>
              <option>Tacos</option>
              <option>Noodles</option>
              <option>Curries</option>
              <option>Rice Dishes</option>
              <option>Barbecue</option>
              <option>Wraps</option>
              <option>Dumplings</option>
              <option>Stews</option>
              <option>Cake</option>
              <option>Stir Fry</option>
              <option>Baked Goods (bread, pastries)</option>
              <option>Ice Cream & Frozen Desserts</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <h1>Price</h1>
            <input
              name="price"
              required
              onChange={handlePriceChange}
              type="number"
              className="flex-1 px-2 py-1  border-2 border-[rgba(0,0,0,0.3)] outline-none"
              placeholder="Price"
            />
          </div>
        </div>


        <div className="flex flex-col gap-2">
          <h1>Short descripton about item</h1>
          <textarea
            name="smallDescription"
            required
            onChange={handleSmallDescriptionChange}
            className="w-full px-2 py-1 border-2 border-[rgba(0,0,0,0.3)] outline-none"
            placeholder="Short descritpion "
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1>Full description of item</h1>
          <textarea
            required
            name="fullDescription"
            onChange={handleFullDescriptionChange}
            className="w-full px-2 py-1 border-2 border-[rgba(0,0,0,0.3)] outline-none"
            placeholder="Full description"
          />
        </div>

        <button
          type="submit"
          onClick={handleFormSubmit}
          className="px-4 py-2 bg-[var(--primary-color)]  text-white"
        >
          ADD
        </button>
      </form>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex justify-center items-center ${isAdding ? "visible" : "hidden"
          }`}
      >
        <Loader />
      </div>
    </>
  );
};
