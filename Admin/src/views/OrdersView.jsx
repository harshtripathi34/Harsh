import React, { useEffect, useState } from 'react'


import { useContext } from 'react'
import { AdminContext } from '../contexts/AdminContext'

import OrderCard from '../components/OrderCard'

export const OrdersView = () => {
  
const {orders}=useContext(AdminContext);


  return (
    <div className="py-6 px-2 sm:px-10 text-start flex flex-1 flex-col gap-4">


{
  orders.length>0
  ?orders.reverse().map((order)=>{

    return <OrderCard orderDetail={order}/>

  }):<p>No  Ordered products</p>

  
}
    
    
    
    </div>
  )
}
