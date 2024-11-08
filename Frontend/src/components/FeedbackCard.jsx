import React from 'react'
import StarRating from './StarRating'

const FeedbackCard = ({feedback}) => {
  return (
    <div className='min-w-[300px] flex-1 rounded-xl px-4 py-4 shadow-xl text-start flex flex-col gap-2 bg-[var(--secondary-color)]'>
<StarRating rating={feedback.rating}/>
<p>{feedback.feedback}</p>
<h1 className='text-lg font-semibold mt-2'>{feedback.name}</h1>

    </div>
  )
}

export default FeedbackCard