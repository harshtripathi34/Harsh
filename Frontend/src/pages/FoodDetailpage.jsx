import React, { useEffect } from 'react'
import { foodData } from '../assets/foodData'
import { useLocation } from 'react-router-dom'
import StarRating from '../components/StarRating'
import ReviewCard from '../components/ReviewCard'

const FoodDetailpage = () => {

  const { food } = useLocation()?.state || {}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='min-h-[100vh] text-start'>
      <div className='w-full sm:flex mt-5 mb-14 gap-5'>
        <div className='sm:w-1/2 w-full h-full flex items-center justify-center '>

          <img className='max-h-[300px] rounded-xl' src={food?.image} />
        </div>
        <div className='sm:w-1/2 w-full text-start flex flex-col gap-2'>
          <h1 className='text-3xl font-semibold'>{food?.name}</h1>
          <p>{food?.category}</p>
          <StarRating rating={food?.rating} />
          <p className='text-lg font-semibold'>${food?.price}</p>

          <p className='mt-5'>{food?.smallDescription}</p>

          <div className='flex gap-5 items-center justify-start mt-7'>
            <button className='h-[40px] w-[150px] bg-[var(--primary-color)] rounded-xl text-black '>Add to cart</button>
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