import React from 'react'
import StarRating from './StarRating'

const ReviewCard = ({review}) => {
  return (
    <div className='w-full max-w-[700px] px-4 py-4 rounded-xl flex flex-col text-start bg-[var(--secondary-color)] gap-2 '>
<StarRating rating={review?.rating}/>
<p>{review?.feedback}</p>
<h1 className='text-lg font-semibold mt-2'>{review?.name}</h1>
    </div>

  )
}

export default ReviewCard