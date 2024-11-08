import React, { useContext } from 'react'
import foodImage from '../assets/images/food.jpg'
import { FoodContext } from '../contexts/FoodContext'
import { useNavigate } from 'react-router-dom'

const ExclusiveOffers = ({foodName,foodImage,discountPercent,}) => {
  const {setFoodFilteredCategory} =useContext(FoodContext)
  const navigate=useNavigate();
  return (
    <div onClick={()=>{
      
      navigate('/menu')
      setFoodFilteredCategory(foodName);

    }} style={{backgroundImage:`linear-gradient(to bottom, transparent,rgba(0,0,0,0.6)),url(${foodImage})`,backgroundSize:'cover' ,backgroundPosition:'center'}} className='h-[300px] flex-1 min-w-[200px] rounded-lg flex flex-col items-start justify-end px-4 py-4 relative overflow-hidden'>

<h1 className='text-5xl font-bold text-[var(--primary-color)]'>{foodName}</h1>
<p className='text-white  text-lg text-start'>Enjoy exclusive offers and discount upto {discountPercent}%  on {foodName} </p>
<div className='bg-red-600 px-5 py-1 rounded-bl-full absolute top-0 right-0 text-white font-semibold text-lg'>
{discountPercent+'%'}
</div> 
    </div>
  )
}

export default ExclusiveOffers