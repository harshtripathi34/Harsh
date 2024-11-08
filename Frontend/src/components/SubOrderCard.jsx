import React, { useContext, useEffect, useState } from 'react'
import StarRating from './StarRating'
import { exclusiveOffers } from '../assets/exclusiveOffers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import PlustIcon from '@mui/icons-material/Add'
import { getAverageRating } from '../utils/getAverageRating';
import { FoodContext } from '../contexts/FoodContext';
const SubOrderCard = ({ foodDetail }) => {
  const food = foodDetail?.product;


 



  return (
    <div className='w-full  flex-1 flex gap-5 justify-between text-start relative '>

      <div className='flex gap-5'>
        <div  style={{ backgroundImage: `url(${food?.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 relative cursor-pointer'>

        </div>
        <div className='flex-1 h-full flex-col gap-2'>
          <h1 className='text-lg font-semibold'>{food?.name}</h1>
          <div className='flex gap-2  itmes-start'>
            <StarRating rating={getAverageRating(food?.reviews)} />
           

          </div>
        </div>
      </div>

      <p>Quantity:{foodDetail?.quantityToBuy}</p>
      
    </div>
  )
}

export default SubOrderCard