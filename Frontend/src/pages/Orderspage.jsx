import React, { useContext, useState,useEffect } from 'react'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext';
import OrderCard from '../components/OrderCard';
// import OrderCard from '../components/OrderCard';

export const Orderspage = () => {
  const { logedInUser } = useContext(FirebaseAuthContext);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const SERVER_URL=import.meta.env.VITE_SERVER_URL;

  const fethcUserOrders = () => {
    setLoading(true);

    try {
      fetch(
        `${SERVER_URL}/userOrders?userAuthId=${logedInUser.uid}`
      ).then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
         
          setOrders(responseData.orders);
        } else {
          toast.error("Error fetching orders");
        }
        setLoading(false);
      });
    } catch (err) {
      toast.error("Error fetching orders !");
    }
  };

  useEffect(() => {
    if (logedInUser) {
      fethcUserOrders();
    }
  }, [logedInUser]);

  return (
    <>
      {!loading ? (
        orders.length > 0 ? (
          <div className="w-full min-h-[100vh] mb-[50vh] mt-5">
            <div className='w-full flex justify-between items-center'>
              <h1 className='text-3xl font-semibold'>Orders</h1>
              <p>({orders.length})</p>
            </div>

            <div className="w-full min-h-[100vh] flex  gap-8 mt-10">
              {/*all cart items list */}
              <div className="flex flex-col gap-4  w-full font-semibold">
                <div className="flex-1 flex flex-col gap-8 items-start">
                  {orders?.reverse().map((order, index) => {
                    return <OrderCard orderDetail={order} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[100vh] w-full flex flex-col items-center justify-center text-xl font-semibold ">
            There is no orders yet !
          </div>
        )
      ) : (
        <div className="min-h-[100vh] w-full flex flex-col items-center justify-center text-xl font-semibold">
          Loading orders...
        </div>
      )}
    </>
  );
}
