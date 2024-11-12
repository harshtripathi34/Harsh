import React from 'react'
const foodImage = 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=600'
const burgerImage = 'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600'
const shushiImage = 'https://cdn.pixabay.com/photo/2019/01/25/15/46/riceroll-3954777_640.jpg'
const pizzaImage = 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=600'
const noodelImage = 'https://images.pexels.com/photos/3209101/pexels-photo-3209101.jpeg?auto=compress&cs=tinysrgb&w=600'
const sandwichImage = 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600'
const pastaImage = 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=600'
const coffeeImage='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'
const FoodsWeOfferBar = () => {

    const offeredFoods = [
        {
            foodName: 'All',
            image: foodImage
        },
        {
            foodName: 'Coffee',
            image: coffeeImage
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
            foodName: 'Sushi',
            image: shushiImage
        }








    ]


  return (


    <div className='const w-full flex gap-6  justify-between flex-wrap '>
            {
                offeredFoods.map((food, index) => {
                   
                    return  <div  className='flex flex-col gap-2 items-center justify-center cursor-pointer'>

                    <div style={{ backgroundImage: `url(${food.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={`sm:h-[150px] h-[100px] aspect-square rounded-full  border-4 `} />
                    <p>{food.foodName}</p>
              
                  </div>
                })
            }
        </div>
   
  )
}

export default FoodsWeOfferBar