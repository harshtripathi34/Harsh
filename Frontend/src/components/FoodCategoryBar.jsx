import React, { useContext } from 'react'
import FoodCategory from './FoodCategory'
import foodImage from '../assets/images/food.jpg'
import burgerImage from '../assets/images/burger2.jpg'
import shushiImage from '../assets/images/shushi2.jpg'
import pizzaImage from '../assets/images/pizza3.jpg'
import noodelImage from '../assets/images/noodles.jpg'
import sandwichImage from '../assets/images/sandwich.jpg'
import pastaImage from '../assets/images/pasta2.jpg'
import { FoodContext } from '../contexts/FoodContext'


const FoodCategoryBar = () => {

    const categories = [
        {
            category: 'All',
            image: foodImage
        },
        {
            category: 'Burgers',
            image: burgerImage
        },
        {
            category: 'Pizza',
            image: pizzaImage
        },
        {
            category: 'Pasta',
            image: pastaImage
        },
        {
            category: 'Noodles',
            image: noodelImage
        },
        {
            category: 'Sandwiches',
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
                categories.map((category, index) => {
                   
                    return <FoodCategory category={category.category} image={category.image} />
                })
            }
        </div>
    )
}

export default FoodCategoryBar