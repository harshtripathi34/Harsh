import React, { useContext } from 'react'
import FoodCategory from './FoodCategory'
const foodImage = 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600'
const burgerImage = 'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600'
const shushiImage = 'https://cdn.pixabay.com/photo/2019/01/25/15/46/riceroll-3954777_640.jpg'
const pizzaImage = 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=600'
const noodelImage = 'https://images.pexels.com/photos/3209101/pexels-photo-3209101.jpeg?auto=compress&cs=tinysrgb&w=600'
const sandwichImage = 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600'
const pastaImage = 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=600'
const coffeeImage='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'
import { FoodContext } from '../contexts/FoodContext'


const FoodCategoryBar = () => {

    const categories = [
        {
            category: 'All',
            image: foodImage
        },
        {
            category: 'Coffee',
            image: coffeeImage
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
                categories.map((ctg, index) => {
                   
                    return <FoodCategory category={ctg.category} image={ctg.image} />
                })
            }
        </div>
    )
}

export default FoodCategoryBar