import React, { useContext } from "react";

import "react-toastify/dist/ReactToastify.css";

import { AdminContext } from "../../contexts/adminContext";
import "./ListedItemCard.css";

const ListedItemCard = ({ product }) => {
  const { deleteAProduct } = useContext(AdminContext);
  const thumbnail = product?.thumbnail;
  const price = parseInt(product?.price);

  const name = product?.name;
 
  const productId = product?._id;
  const category = product?.category;

  return (
    <div className="w-full sm:flex px-4 py-4 gap-6 sm:min-h-[200px]  ">
      <div className="sm:w-1/5 w-full rounded-lg flex items-center justify-center sm:product-image h-[200px] ">
        <img className="h-full" src={thumbnail} />
      </div>
      <div
        className="sm:flex-1 w-full flex flex-col gap-1 text-start
"
      >
        {/**name */}
        <div className="flex justify-between items-center  w-full ">
          <h1 className=" text-2xl">{name}</h1>
        </div>
        {/** */}
        <div className="flex gap-2 items-center text-base w-full ">
          <h1 className=" text-[rgba(0,0,0,0.6)] ">Product id</h1>
          <h1 className="text-black">{productId}</h1>
        </div>

        {/** */}

        <div className="my-6 flex gap-4 flex-wrap ">
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="flex  gap-1 items-center px-4 py-1 rounded-full border   "
          >
            <h1 className="text-[rgba(0,0,0,0.6)] ">Category:</h1>
            <h1 className="text-lg text-[var(--primary-color)] font-semibold">
              {category}
            </h1>
          </div>
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="flex  gap-1 items-center px-4 py-1 rounded-full border   "
          >
            <h1 className="text-[rgba(0,0,0,0.6)] ">Price:</h1>
            <h1 className="text-lg text-[var(--primary-color)] font-semibold">
              {"$" + price}
            </h1>
          </div>
         

          {/*total price */}
        </div>

        {/*Action buttons */}

        <div className="flex gap-4 mt-5 flex-wrap">
          <button
            style={{ border: "2px solid var(--primary-color)" }}
            onClick={() => deleteAProduct(product?._id)}
            className="py-2 px-4 outline-none  text-black save-btn rounded-full hover:bg-[var(--light-bg-color)]"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedItemCard;
