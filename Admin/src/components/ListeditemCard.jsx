import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../contexts/AdminContext';



const ListeditemCard = ({ item }) => {
  const food = item;
const {deleteAProduct}=useContext(AdminContext)
  return (
    <div className='w-full   flex gap-5 justify-between text-start flex-wrap '>
      <div className='sm:flex gap-5'>
        <div style={{ backgroundImage: `url(${food?.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 relative cursor-pointer'>

        </div>
        <div className='flex-1 h-full flex-col gap-2'>
          <div className='flex gap-1'><p>Product Id:</p><p className='font-semibold'>{food?._id}</p></div>
          <h1 className='text-lg font-semibold'>{food?.name}</h1>


          <div className='flex gap-1'><p>Product Id:</p><p className='font-semibold'>₹{food?.price}</p></div>


        </div>
      </div>


      <button onClick={() => deleteAProduct(food?._id)} className='h-[30px] px-4 rounded-xl border-2 border-[var(--primary-color)] hover:bg-[var(--secondary-color)] transition duration-300 ease-in-out text-black'>Remove</button>


    </div>
  )
}

export default ListeditemCard