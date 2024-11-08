import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'
import { exclusiveOffers } from '../assets/exclusiveOffers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import PlustIcon from '@mui/icons-material/Add'
const CartFoodCard = ({ food }) => {

  const [discountedPrice, setDiscountedPrice] = useState();
  const [discountPercentOnFood, setDiscountPercentOnFood] = useState();
  const [isQuantityBarShow, setIsQuantityBarShow] = useState(false);
  const [quntity, setQuantity] = useState(food?.quanity);
  // const [isDiscountOnThisFood,setIsDiscountOnThisFood]=useState(false);
  useEffect(() => {
    const foodWithOffer = exclusiveOffers.find((offer) => offer.foodCatgory == food.category);
    if (foodWithOffer) {
      const discountPer = foodWithOffer.discountPercent;
      setDiscountPercentOnFood(discountPer);
      setDiscountedPrice(Math.round((food?.price * discountPer) / 100));
    }
  }, [food])



  return (
    <div className='w-full  flex-1 flex gap-5 justify-between text-start relative '>

      <div className='flex gap-5'>
      <div onMouseEnter={() => setIsQuantityBarShow(true)} onMouseLeave={() => setIsQuantityBarShow(false)} style={{ backgroundImage: `url(${food?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-[100px] h-[100px] rounded-xl overflow-hidden mb-3 relative cursor-pointer'>
        
        </div>
       <div className='flex-1 h-full flex-col gap-2'>
        <h1 className='text-lg font-semibold'>{food?.name}</h1>
        <div className='flex gap-2  itmes-start'>
        <StarRating rating={food?.rating} />
          <div className='flex  gap-1 items-center'>
            <p className='text-lg'>${discountedPrice ? discountedPrice : food?.price}</p>
            {discountedPrice ? <del className='text-black strikethrough-'>${food?.price}</del> : ''}
          </div>
         
        </div>
       </div>
      </div>
      <div className={`h-[40px] bg-white rounded-full flex gap-1 py-1 px-1 shadow-lg`}>
            <button onClick={() => setQuantity(prev => prev + 1)} className='h-full aspect-square bg-red-300 rounded-full flex items-center justify-center'>
              +
            </button>
            <div className='h-full flex items-center justify-center'>
              {quntity}
            </div>
            <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)} className='h-full aspect-square bg-green-300 rounded-full flex items-center justify-center'>
              -
            </button>

          </div>
<div className='flex gap-4'>
  <button className='h-[30px] px-4 rounded-xl bg-[var(--primary-color)] text-black'>Remove</button>
  <button className='h-[30px] px-4 rounded-xl border-2 border-[var(--primary-color)] hover:bg-[var(--secondary-color)] transition duration-300 ease-in-out text-black'>Save </button>
</div>
    </div>
  )
}

export default CartFoodCard