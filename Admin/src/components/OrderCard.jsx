import React, { useContext, useEffect, useState } from 'react'

import { formatDate } from  '../utils/formatDate'

import SubOrderCard from './SubOrderCard';
import { AdminContext } from '../contexts/adminContext';
const OrderCard = ({ orderDetail }) => {
  const orderedItems= orderDetail?.products;
  const [orderStatus,setOrderStatus]=useState(orderDetail?.status);
  const orderedAt=orderDetail?.createdAt;
  const orderId=orderDetail?._id;
  const {updateOrderStatus}=useContext(AdminContext)


  return (
    <div className='w-full   flex flex-col gap-2 justify-between text-start relative border-2 border-[var(--secondary-color)] shadow-lg px-4 py-6'>
       <div className='flex flex-wrap gap-4'><p>Order status:</p><div className="flex gap-4">
            <select
              onChange={(e) => setOrderStatus(e.target.value)}
              value={orderStatus}
              className={`relative flex items-center justify-center rounded-full $ px-4 py-2  `}
            >
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Processing</option>
              <option>Out for delivery</option>
              <option>Delevered</option>
            </select>
            <button
              onClick={() => updateOrderStatus(orderDetail?._id, orderStatus)}
              className="py-2 px-6 outline-none border-2 border-[var(--primary-color)]  text-black  hover:bg-[var(--light-bg-color)] rounded-full"
            >
              Save
            </button>
          </div></div>
      <div className='flex gap-4'><p>Order Id:</p><p className='break-words text-wrap'>{orderId}</p></div>
      <div className='flex gap-4'><p>Ordered at:</p><p>{formatDate(orderedAt)}</p></div>
      <div>
        <p>Ordered items:</p>
        <div className='w-full sm:px-16 mt-2 flex flex-col gap-2'>
          {
            orderedItems?.map((item,index)=>{
              return <SubOrderCard foodDetail={item}/>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default OrderCard