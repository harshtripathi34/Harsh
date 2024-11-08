import React, { useContext, useEffect } from 'react'
import foodImage from '../assets/images/food.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faList } from '@fortawesome/free-solid-svg-icons'
import FoodCategoryBar from '../components/FoodCategoryBar'
import { foodData } from '../assets/foodData'
import FoodCard from '../components/FoodCard'
import { FoodContext } from '../contexts/FoodContext'
const Menupage = () => {
  const {foodFilteredCategory} =useContext(FoodContext)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='w-full'>
      {/**menu page header banner. */}
      <div className='h-[250px] rounded-xl text-center flex  items-center justify-center bg-[var(--secondary-color)] py-6'>
        <div className='w-[60%] h-full flex flex-col justify-end items-start  gap-4 text-start'>
          <h1 className='text-4xl font-bold text-[var(--primary-color)] '>#Menu</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet ex scelerisque orci pharetra placerat nec id ante. Quisque at lacinia odio. Sed eu risus porttitor nisi vulputate </p>
          <div className='flex gap-2 items-start'>
            <div className='text-black px-4 py-2 border bg-white rounded-lg shadow-lg flex gap-1 items-center justify-center'>
              <FontAwesomeIcon className='text-green-600' icon={faBowlFood} />
              Get tasty foods
            </div>
            <div className='text-black px-4 py-2 border bg-white rounded-lg shadow-lg flex gap-1 items-center justify-center'>
              <FontAwesomeIcon className='text-green-600' icon={faList} />
              Browse over large menu
            </div>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${foodImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-[30%] h-full rounded-xl'>



        </div>
      </div>
      {/*page body */}

      {/**filter bar  */}
      <section className='mt-10 w-full'>
        <FoodCategoryBar />
      </section>
      {
        /**foods dispaly section */

      }

      <section className='w-full flex flex-col gap-5 mt-10'>
        <h1 className='text-3xl  text-start '>{foodFilteredCategory} </h1>
        <div className='w-full flex  gap-5 flex-wrap'>
          {
            foodData.map((food) => 
            
            {
              if(food.category==foodFilteredCategory){
                return <FoodCard food={food} />
              }
              else if(foodFilteredCategory=='All'){
                return <FoodCard food={food}/>
              }
            })
          }


        </div>
      </section>

    </div>
  )
}

export default Menupage