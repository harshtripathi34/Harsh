import React, { useContext, useEffect, useState } from 'react'
import StarRating from './StarRating'
import { exclusiveOffers } from '../assets/exclusiveOffers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import ShoppingBag from '@mui/icons-material/ShoppingBag'
import PlustIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import { getAverageRating } from '../utils/getAverageRating';
import { FoodContext } from '../contexts/FoodContext';
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext';
import { toast } from 'react-toastify';
const FoodCard = ({ food }) => {

  const [discountedPrice, setDiscountedPrice] = useState();
  const [discountPercentOnFood, setDiscountPercentOnFood] = useState();
  const [isQuantityBarShow, setIsQuantityBarShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addProductToUserCart } = useContext(FoodContext)
  const {logedInUser} =useContext(FirebaseAuthContext)


  useEffect(() => {
    const foodWithOffer = exclusiveOffers.find((offer) => offer.foodCatgory == food.category);
    if (foodWithOffer) {
      const discountPer = foodWithOffer.discountPercent;
      setDiscountPercentOnFood(discountPer);
      setDiscountedPrice(Math.round((food?.price * discountPer) / 100));
    }
  }, [food])



  return (
    <div className='min-w-[300px] max-w-[350px] flex-1 h-[400px] text-start relative'>
      <div onMouseEnter={() => setIsQuantityBarShow(true)} onMouseLeave={() => setIsQuantityBarShow(false)} style={{ backgroundImage: `url(${food?.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-full h-[250px] rounded-xl mb-3 relative cursor-pointer overflow-hidden'>
        <div onClick={() => navigate('/detail', { state: { food } })} className='h-full w-full bg-transparent'>

        </div>
        <div className='absolute z-20 right-4 bottom-4 flex gap-2'>

          <div className={`h-[40px] bg-white rounded-full flex gap-1 py-1 px-1  ${isQuantityBarShow ? 'opacity-[100%]' : 'opacity-0'} transition duration-500 ease-in-out`}>
            <button onClick={() => setQuantity(prev => prev + 1)} className='h-full aspect-square bg-green-300 rounded-full flex items-center justify-center'>
              +
            </button>
            <div className='h-full flex items-center justify-center'>
              {quantity}
            </div>
            <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)} className='h-full aspect-square bg-red-300   rounded-full flex items-center justify-center'>
              -
            </button>

          </div>
          <div onClick={() => {
            logedInUser?addProductToUserCart(food, quantity):toast.error("User not logined !")
          }} className=' bg-white hover:bg-[var(--primary-color)] transition duration-400 ease-in-out h-[40px] aspect-square rounded-full flex items-center justify-center shadow-lg cursor-pointer'>
            <PlustIcon />
          </div>
        </div>
      </div>
      <h1 className='text-lg font-semibold'>{food?.name}</h1>

      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
          <p className='text-lg'>₹{discountedPrice ? discountedPrice : food?.price}</p>
          {discountedPrice ? <del className='text-black strikethrough-'>₹{food?.price}</del> : ''}
        </div>
        <StarRating rating={getAverageRating(food?.reviews)} />
      </div>
      <p className='text-wrap short-para'>{food.smallDescription}</p>

      {
        discountPercentOnFood ? <div className='text-white bg-red-700 rounded-bl-full px-5 py-1 absolute top-0 right-0'>
          {discountPercentOnFood + '%'}
        </div> : ''
      }


      {/**add to cart btn */}



    </div>
  )
}

export default FoodCard