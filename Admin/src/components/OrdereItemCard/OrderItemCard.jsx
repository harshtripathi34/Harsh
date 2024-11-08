import React from "react";
import { useContext } from "react";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "../../contexts/adminContext";
import { formatDate } from '../../utils/formatDate'

const OrderItemCard = ({ orderDetail }) => {
  const { product, status } = orderDetail;
  const [orderStatus, setOrderStatus] = useState(status);
  const { updateOrderStatus } = useContext(AdminContext);

  const thumbnail = product?.thumbnail;
  const price = parseInt(product?.price);
  console.log("priceiie:", price);
  const name = product?.name;
  const buiedQuantity = product?.quantityToBuy;
  const buiedSize = product?.sizeToBuy;
  const orderId = orderDetail?._id;
  const orderedAt = orderDetail?.createdAt;

  const totalPrice = buiedQuantity * price;

  const colorChagneofStatus = () => {
    if (orderStatus == "Delivered") {
      return "bg-[rgba(0,150,0,0.3)]";
    }
    if (orderStatus == "Deliver soon") {
      return "bg-[rgba(0,0,150,0.3)]";
    }
    if (orderStatus == "Not delivered") {
      return "bg-[rgba(150,0,0,0.3)]";
    }
  };

  return (
    <div className="w-full sm:flex px-4 py-4 gap-6  ">
      <div className="sm:w-1/5 w-full rounded-lg flex items-center justify-center sm:product-image h-[200px] ">
        <img className="h-full" src={thumbnail} />
      </div>
      <div
        className="sm:flex-1 w-full flex flex-col gap-1 text-start
"
      >
        {/**name */}
        <div className="flex justify-between items-center  w-full  ">
          <h1 className=" text-2xl">{name}</h1>

          <div className="flex gap-4">
            <select
              onChange={(e) => setOrderStatus(e.target.value)}
              value={orderStatus}
              className={`relative flex items-center justify-center rounded-full ${colorChagneofStatus()} px-4 py-2  `}
            >
              <option>Delivered</option>
              <option>Deliver soon</option>
              <option>Not delivered</option>
            </select>
            <button
              onClick={() => updateOrderStatus(orderDetail?._id, orderStatus)}
              className="py-2 px-6 outline-none border-2 border-[var(--primary-color)]  text-black  hover:bg-[var(--light-bg-color)] rounded-full"
            >
              Save
            </button>
          </div>
        </div>
        {/** */}
        <div className="flex gap-2 items-center text-base w-full ">
          <h1 className=" text-[rgba(0,0,0,0.6)] ">Order id</h1>
          <h1 className="text-black">{orderId}</h1>
        </div>
        {/**ordered at */}
        <div className="flex gap-2 items-center text-base w-full ">
          <h1 className="text-[rgba(0,0,0,0.6)]  ">Ordered at</h1>
          <h1 className="text-black">{formatDate(orderedAt)}</h1>
        </div>
        {/** */}

        <div className="my-6 flex gap-4 ">
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="flex  gap-1 items-center px-4 py-1 rounded-full border   "
          >
            <h1 className="text-[rgba(0,0,0,0.6)] ">Price:</h1>
            <h1 className="text-lg text-[var(--primary-color)] font-semibold">
              {"$" + price}
            </h1>
          </div>
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="flex  gap-1 items-center px-4 py-1 rounded-full border  "
          >
            <h1 className="text-[rgba(0,0,0,0.6)] ">Size:</h1>
            <h1 className="text-lg text-[var(--primary-color)] font-semibold">
              {buiedSize}
            </h1>
          </div>
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="flex  gap-1 items-center px-4 py-1 rounded-full border  "
          >
            <h1 className="text-[rgba(0,0,0,0.6)] ">Category:</h1>
            <h1 className="text-lg text-[var(--primary-color)] font-semibold">
              {orderDetail?.product?.category}
            </h1>
          </div>
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="flex  gap-1 items-center px-4 py-1 rounded-full border  "
          >
            <h1 className="text-[rgba(0,0,0,0.6)] ">Quantity:</h1>
            <h1 className="text-lg text-[var(--primary-color)] font-semibold">
              {buiedQuantity}
            </h1>
          </div>
          {/*total price */}
          <div
            style={{ backgroundColor: "var(--secondary-color)" }}
            className="flex  gap-1 items-center px-4 py-1 rounded-full border  "
          >
            <h1 className="text-[rgba(0,0,0,0.6)] ">Total Price:</h1>
            <h1 className="text-lg text-[var(--primary-color)] font-semibold">
              {"$" + totalPrice}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
