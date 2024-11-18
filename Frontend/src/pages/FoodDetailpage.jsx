import React, { useContext, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import StarRating from '../components/StarRating'
import ReviewCard from '../components/ReviewCard'
import { getAverageRating } from '../utils/getAverageRating'
import { FoodContext } from '../contexts/FoodContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext'
import { toast } from 'react-toastify'

const FoodDetailpage = () => {

  const { food } = useLocation()?.state || {}
  const { addProductToUserCart, addProductRating } = useContext(FoodContext);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [ratingPopup, setRatingPopup] = useState(false);
  const { logedInUser } = useContext(FirebaseAuthContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='min-h-[100vh] text-start mb-[50vh]'>
      <div className='w-full sm:flex mt-5 mb-14 gap-5'>
        <div className='sm:w-1/2 w-full h-full flex items-center justify-center '>

          <img className='max-h-[300px] rounded-xl' src={food?.thumbnail} />
        </div>
        <div className='sm:w-1/2 w-full text-start flex flex-col gap-2'>
          <h1 className='text-3xl font-semibold'>{food?.name}</h1>
          <p>{food?.category}</p>
          <StarRating rating={getAverageRating(food?.reviews)} />
          <p className='text-lg font-semibold'>₹{food?.price}</p>

          <div className={`h-[40px]  bg-white rounded-full flex gap-1 py-1 px-1   shadow-lg max-w-[100px] justify-center`}>
            <button onClick={() => setQuantity(prev => prev + 1)} className='h-full aspect-square rounded-full bg-green-300  flex items-center justify-center'>
              +
            </button>
            <div className='h-full flex items-center justify-center'>
              {quantity}
            </div>
            <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : prev)} className='h-full aspect-square bg-red-300  rounded-full flex items-center justify-center'>
              -
            </button>

          </div>
          <p className='mt-5'>{food?.smallDescription}</p>

          <div className='flex gap-5 items-center justify-start mt-7'>
            <button onClick={() => {
              logedInUser ? addProductToUserCart(food, quantity) : toast.error("User not logined !")
            }} className='h-[40px] w-[150px] bg-[var(--primary-color)] rounded-xl text-black '>Add to cart</button>
         
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
      <h1 className='text-lg font-bold   mt-8 '>Revie this product:</h1>
      <p>share your thoughts about this product with cutomers</p>
      <button onClick={() => setRatingPopup(true)} className='px-4 py-2 mt-2 bg-[var(--primary-color)] rounded-full'>Rate ths item</button>


      {/**rating  */}
      <div
        className={`fixed top-0 left-0 h-full  w-full flex flex-col justify-center items-center bg-[var(--secondary-color)] z-50 ${ratingPopup ? "visible" : "hidden"
          }`}
      >
        <div className={`px-5 py-6 bg-white shadow-xl relative w-[80vw] sm:w-[400px] sm:min-h-[300px] border text-center`}>
          <p className="text-2xl">Rate the Product:</p>
          {[...Array(5)].map((_, index) => (
            <span
              className="text-[30px]"
              key={index}
              onClick={() => setRating(index + 1)}
              style={{
                color: index < rating ? "#F97316" : "gray",
                cursor: "pointer",
              }}
            >
              ★
            </span>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProductRating(food?._id, comment, rating);
            }}


            className="w-full mt-5"
          >
            <label>Add Review</label>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full border-2 border-[var(--primary-color)] outline-none px-2 py-1 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="text-lg border-2 bg-[var(--primary-color)] hover:bg-[var(--btn-hover-color)] text-white rounded-full px-4 py-1 mt-5"
            >
              Submit
            </button>
          </form>
          <FontAwesomeIcon
            onClick={() => setRatingPopup(false)}
            className="absolute right-5 top-5 cursor-pointer text-xl"
            icon={faX}
          />
        </div>
      </div>
    </div>
  )
}

export default FoodDetailpage