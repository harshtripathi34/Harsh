import React, { useContext, useEffect, useState } from 'react'




const SubOrderCard = ({ foodDetail }) => {
  const food = foodDetail?.product;


 



  return (
    <div className='w-full  flex-1 flex gap-5 justify-between text-start relative '>

      <div className='flex gap-5'>
        <div  style={{ backgroundImage: `url(${food?.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 relative cursor-pointer'>

        </div>
        <div className='flex-1 h-full flex-col gap-2'>
          <h1 className='text-lg font-semibold'>{food?.name}</h1>
          
        </div>
      </div>

      <p>Quantity:{foodDetail?.quantityToBuy}</p>
      
    </div>
  )
}

export default SubOrderCard