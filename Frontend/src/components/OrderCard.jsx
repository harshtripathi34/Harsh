import React, { useContext, useEffect, useState } from 'react'

import { formatDate } from '../utils/formatDate'; '../utils/formatDate'

import SubOrderCard from './SubOrderCard';
const OrderCard = ({ orderDetail }) => {
  const orderedItems= orderDetail?.products;
  const orderStatus=orderDetail?.status;
  const orderedAt=orderDetail?.createdAt;
  const orderId=orderDetail?._id;


  return (
    <div className='w-full   flex flex-col gap-2 justify-between text-start relative border-2 border-[var(--secondary-color)] shadow-lg px-4 py-6'>
       <div className='flex gap-4'><p>Order status:</p><p>{orderStatus}</p></div>
      <div className='flex gap-4'><p>Order Id:</p><p>{orderId}</p></div>
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