import React from 'react'
import foodImage from '../assets/images/food.jpg'
import burgerImage from '../assets/images/burger2.jpg'
import shushiImage from '../assets/images/shushi2.jpg'
import pizzaImage from '../assets/images/pizza3.jpg'
import noodelImage from '../assets/images/noodles.jpg'
import sandwichImage from '../assets/images/sandwich.jpg'
import pastaImage from '../assets/images/pasta2.jpg'
const FoodsWeOfferBar = () => {

    const offeredFoods = [
        {
            foodName: 'All',
            image: foodImage
        },
        {
            foodName: 'Burgers',
            image: burgerImage
        },
        {
            foodName: 'Pizza',
            image: pizzaImage
        },
        {
            foodName: 'Pasta',
            image: pastaImage
        },
        {
            foodName: 'Noodles',
            image: noodelImage
        },
        {
            foodName: 'Sandwiches',
            image: sandwichImage
        },
        {
            category: 'Sushi',
            image: shushiImage
        }








    ]


  return (


    <div className='w-full flex gap-6  justify-between flex-wrap '>
            {
                offeredFoods.map((food, index) => {
                   
                    return  <div  className='flex flex-col gap-2 items-center justify-center cursor-pointer'>

                    <div style={{ backgroundImage: `url(${food.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={`h-[150px] aspect-square rounded-full  border-4 $`} />
                    <p>{food.foodName}</p>
              
                  </div>
                })
            }
        </div>
   
  )
}

export default FoodsWeOfferBar