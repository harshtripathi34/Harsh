import React, { useTransition } from 'react'
import heroImage from '../assets/images/food_bowl.png'
import {useNavigate} from 'react-router-dom'
export const Hero = () => {
    const navigate=useNavigate();
    return (
        <div className='w-full h-[30vh] sm:h-[80vh]  xs:h-[50vh] bg-[var(--secondary-color)] rounded-xl flex justify-center items-center overflow-hidden max-h-[600px]'>
            <div className='w-1/2 flex-1 text-start px-4 '>
                <p className='hide-on-sm'>Order Restaurant food, takeaway and groceries.</p>
                <h1 className='sm:text-6xl xs:text-4xl text-2xl font-bold text-black'>

                    Feast your senses
                </h1>
                <h1 className='sm:text-6xl xs:text-4xl text-2xl font-bold text-[var(--primary-color)]'>Fast and fresh</h1>
                <button onClick={()=>navigate('/menu')}  className='px-5 py-3 bg-white rounded-full text-black mt-5 hide-on-sm'>View Menu</button>
            </div>
            <div className='w-1/2 relative h-full flex flex-col items-center justify-center'>
                <img className='z-10 absolute c' src={heroImage} />

                <div className='bg-[var(--primary-color)] h-[100%] w-[100%] rounded-tl-full rounded-bl-full '>

                </div>

            </div>
        </div>
    )
}
