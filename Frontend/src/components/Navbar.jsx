import React, { useContext, useState } from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faMagnifyingGlass, faShop, faX } from '@fortawesome/free-solid-svg-icons' 
import { NavLink } from 'react-router-dom'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext'
const Navbar = () => {
  const [isProfilePopup, setIsProfilePopup] = useState(false);
  const {logedInUser,logOut} =useContext(FirebaseAuthContext)
  return (
    <div className='w-full flex justify-between py-2 items-center sticky top-0 bg-white z-50'>
{/* //logo */}
<NavLink to='/' className='text-4xl font-bold text-[var(--primary-color)]'>The Nook Cafe</NavLink>
{/* //options */}
<div className='flex gap-4'>

  <NavLink to={'/'} className='text-lg cursor-pointer'>Home</NavLink>
  <NavLink to='/menu' className='text-lg cursor-pointer'>Menu</NavLink>
  <NavLink to={'/orders'} className='text-lg cursor-pointer'>Orders</NavLink>
  <p className='text-lg cursor-pointer'>About</p>
  <p className='text-lg cursor-pointer'>Contact us</p>
  

</div>
{/* //actionicons */}
<div className='text-lg flex gap-4 items-center '>
 {/* /search */}
 <FontAwesomeIcon icon={faMagnifyingGlass}/>
  {/* /cart */}
<NavLink to={'/cart'}>  <FontAwesomeIcon  icon={faCartShopping}/></NavLink>
  {/* /login */}
  <FontAwesomeIcon onClick={() => setIsProfilePopup(true)} icon={faUser}/>

</div>




<div
              className={` fixed top-0 right-0  h-full min-h-[100vh] w-full z-10 flex      ${!isProfilePopup ? "hidden" : "visible"
                }    border rounded-md shadow-md`}
            >
              <div onClick={() => setIsProfilePopup(false)} className="flex-1 h-full bg-transparent">

              </div>
              <div className=" w-1/2 max-w-[400px] h-full min-w-[250px] px-4 py-6 flex flex-col items-center justify-center gap-1 bg-[var(--primary-color)] relative">

                <FontAwesomeIcon
                  onClick={() => setIsProfilePopup(false)}
                  className="text-xl absolute text-white  left-10 top-10 hover:cursor-pointer"
                  icon={faX}
                />
                <div className="h-[80px] w-[80px] rounded-full bg-white flex justify-center items-center">
                  <FontAwesomeIcon
                    className="text-2xl text-gray-500"
                    icon={faUser}
                  />
                </div>

                {
                  logedInUser ?
                    <div className="flex flex-col items-center justify-center px-4 ">
                      <h1 className="text-xl font-semibold mt-2 text-white">
                        {logedInUser.displayName ? logedInUser.displayName : ""}
                      </h1>
                      <h1 className="text-base text-white text-wrap break-words text-center">
                        {logedInUser.email}
                      </h1>
                      <button
                        onClick={logOut}
                        className="px-4 py-1 mt-4 border rounded-full text-white min-w-[100px] text-center hover:bg-red-600 max-w-[150px]"
                      >
                        Logout
                      </button>
                    </div> :
                    <div className="flex flex-col items-center justify-center mt-2 gap-4">
                      <h1 className="text-white">Your are not login now !</h1>
                      <NavLink to={'/login'} className="px-4 py-1 border rounded-full text-white min-w-[100px] text-center max-w-[150px]">Login</NavLink>
                    </div>
                }

              </div>
            </div>

    </div>
  )
}

export default Navbar