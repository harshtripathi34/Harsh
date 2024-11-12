import React, { useContext } from 'react'
import { FoodContext } from '../contexts/FoodContext'


const FoodCategory = ({ category, image }) => {
  const { foodFilteredCategory,
    setFoodFilteredCategory } = useContext(FoodContext)

  return (
    <div onClick={()=>setFoodFilteredCategory(category)} className='flex flex-col gap-2 items-center justify-center cursor-pointer'>

      <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={`sm:h-[150px] h-[100px] aspect-square rounded-full  border-4 ${foodFilteredCategory===category?'border-[var(--primary-color)]':''}`} />
      <p>{category}</p>

    </div>
  )
}

export default FoodCategory