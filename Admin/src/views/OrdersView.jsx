import React, { useEffect, useState } from 'react'


import { useContext } from 'react'
import { AdminContext } from '../contexts/adminContext'

import OrderCard from '../components/OrderCard'

export const OrdersView = () => {
  
const {orders}=useContext(AdminContext);

console.log('orders:',orders)
  return (
    <div className="py-6 px-10 text-start flex flex-1 flex-col gap-4">


{
  orders.length>0
  ?orders.reverse().map((order)=>{

    return <OrderCard orderDetail={order}/>

  }):<p>No  Ordered products</p>

  
}
    
    
    
    </div>
  )
}
