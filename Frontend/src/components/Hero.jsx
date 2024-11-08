import React from 'react'
import heroImage from '../assets/images/food_bowl.png'
export const Hero = () => {
    return (
        <div className='w-full h-[80vh] bg-[var(--secondary-color)] rounded-xl flex justify-center items-center overflow-hidden max-h-[600px]'>
            <div className='w-1/2 flex-1 text-start px-4 '>
                <p>Order Restaurant food, takeaway and groceries.</p>
                <h1 className='text-[60px] font-bold text-black'>

                    Feast your senses
                </h1>
                <h1 className='text-[60px] font-bold text-[var(--primary-color)]'>Fast and fresh</h1>
                <button className='px-5 py-3 bg-white rounded-full text-black mt-5'>View Menu</button>
            </div>
            <div className='w-1/2 relative h-full flex flex-col items-center justify-center'>
                <img className='z-10 absolute c' src={heroImage} />

                <div className='bg-[var(--primary-color)] h-[100%] w-[100%] rounded-tl-full rounded-bl-full '>

                </div>

            </div>
        </div>
    )
}
