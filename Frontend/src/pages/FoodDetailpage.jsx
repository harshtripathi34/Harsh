import React, { useContext, useEffect, useState } from 'react'
import { foodData } from '../assets/foodData'
import { useLocation } from 'react-router-dom'
import StarRating from '../components/StarRating'
import ReviewCard from '../components/ReviewCard'
import { getAverageRating } from '../utils/getAverageRating'
import { FoodContext } from '../contexts/FoodContext'

const FoodDetailpage = () => {

  const { food } = useLocation()?.state || {}
  const { addProductToUserCart } = useContext(FoodContext);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='min-h-[100vh] text-start'>
      <div className='w-full sm:flex mt-5 mb-14 gap-5'>
        <div className='sm:w-1/2 w-full h-full flex items-center justify-center '>

          <img className='max-h-[300px] rounded-xl' src={food?.thumbnail} />
        </div>
        <div className='sm:w-1/2 w-full text-start flex flex-col gap-2'>
          <h1 className='text-3xl font-semibold'>{food?.name}</h1>
          <p>{food?.category}</p>
          <StarRating rating={getAverageRating(food?.reviews)} />
          <p className='text-lg font-semibold'>${food?.price}</p>

          <div className={`h-[40px] bg-white rounded-full flex gap-1 py-1 px-1   shadow-lg max-w-[100px] justify-center`}>
            <button onClick={() => setQuantity(prev => prev + 1)} className='h-full aspect-square bg-red-300 rounded-full flex items-center justify-center'>
              +
            </button>
            <div className='h-full flex items-center justify-center'>
              {quantity}
            </div>
            <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)} className='h-full aspect-square bg-green-300 rounded-full flex items-center justify-center'>
              -
            </button>

          </div>
          <p className='mt-5'>{food?.smallDescription}</p>

          <div className='flex gap-5 items-center justify-start mt-7'>
            <button onClick={()=>addProductToUserCart(food,quantity)} className='h-[40px] w-[150px] bg-[var(--primary-color)] rounded-xl text-black '>Add to cart</button>
            <button className='h-[40px] w-[150px] border-2 border-[var(--primary-color)] hover:bg-[var(--secondary-color)] rounded-xl transition duration-300 ease-in-out text-black '>Order now</button>
          </div>
        </div>
      </div>
      <h1 className='text-lg font-bold   mt-8 '>Description:</h1>
      <p className='sm:w-[60%] mt-5'>{food?.fullDescription}</p>
      <h1 className='text-lg font-bold   mt-8 '>Reviews:</h1>
      <div className='flex flex-col gap-5 mt-5 mb-10'>
        {
          food?.reviews?.map((review, index) => {
            return <ReviewCard review={review} />
          })
        }
      </div>
    </div>
  )
}

export default FoodDetailpage