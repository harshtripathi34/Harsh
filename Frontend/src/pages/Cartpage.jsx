import React, { useContext, useEffect, useState } from 'react'
import CartFoodCard from '../components/CartFoodCard'
import { FoodContext } from '../contexts/FoodContext';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingFees, setShippingFees] = useState(15);
    const { cartProducts } = useContext(FoodContext);
    const navigate=useNavigate();
    useEffect(() => {
        const tPrice = cartProducts?.reduce((acc, item) => {
            return acc + item?.product?.price*item?.quantityToBuy
        }, 0);
        setTotalPrice(tPrice);
    }, [cartProducts]);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            {

cartProducts?.length > 0 ?
                    <div className='w-full sm:flex min-h-[100vh] gap-5 flex-wrap mt-5 mb-[50vh]'>


                        <div className='flex-1 flex flex-col gap-2'>
                            <h1 className='text-3xl  text-start '>Cart items </h1>
                            <div className='flex flex-col  gap-5 '>

                                {
                                    cartProducts.map((foodDetail, index) => {
                                        return <CartFoodCard key={index} foodDetail={foodDetail} />
                                    })
                                }


                            </div>
                        </div>

                        <div className='sm:w-[300px] w-full flex flex-col gap-2'>
                            <h1 className='text-3xl  text-start '>Cart summary </h1>
                            <div className=' px-4 py-7 rounded-xl bg-[var(--secondary-color)]'>
                                <div className='flex justify-between'>
                                    <p>Toatal items:</p>
                                    <p>{cartProducts?.length}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Toatal:</p>
                                    <p>₹{totalPrice}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Shipping fees:</p>
                                    <p>₹{shippingFees}</p>
                                </div>
                                <div className='w-full h-[1px] my-3 bg-black'></div>
                                <div className='flex justify-between'>
                                    <p>Sub total:</p>
                                    <p>₹{shippingFees + totalPrice}</p>
                                </div>
                                <button onClick={()=>navigate('/buy',{state:{products:cartProducts,totalPrice}})} className='bg-[var(--primary-color)] rounded-xl w-full h-[40px] my-3'>Proceed to checkout</button>
                            </div>
                        </div>

                    </div> :
                    <div>
                        There is not product at cart
                    </div>
            }</>
    )
}

export default Cartpage