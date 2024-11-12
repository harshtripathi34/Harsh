import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCartShopping, faMagnifyingGlass, faShop, faX } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext'
import '../styles/Navbar.css'
const Navbar = () => {
  const [isProfilePopup, setIsProfilePopup] = useState(false);
  const { logedInUser, logOut } = useContext(FirebaseAuthContext);
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);
  return (
    <div className='w-full flex justify-between py-2 items-center sticky top-0 bg-white z-50'>
      {/* //logo */}
      <NavLink to='/' className='sm:text-4xl text-2xl font-bold text-[var(--primary-color)]'>The Nook Cafe</NavLink>
      {/* //options */}
      <div className='flex gap-4 nav-otions'>

        <NavLink to={'/'} className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>Home</NavLink>
        <NavLink to='/menu' className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>Menu</NavLink>
        <NavLink to={'/orders'}className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>Orders</NavLink>
        <NavLink to={'/about'} className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>About</NavLink>
        <NavLink to={'/contact'} className={({isActive})=>`text-lg cursor-pointer hover:text-[var(--primary-color)] transition duration-300 ease-in-out ${isActive?'text-[var(--primary-color)]':''}`}>Contact us</NavLink>
        


      </div>
      {/* //actionicons */}
      <div className='text-lg flex gap-4 items-center '>
        {/* /search */}
        <FontAwesomeIcon onClick={() => setIsMenuBarVisible(true)} className='menu-sidebar-icon cursor-pointer' icon={faBars} />
        {/* /cart */}
        <NavLink to={'/cart'}>  <FontAwesomeIcon icon={faCartShopping} /></NavLink>
        {/* /login */}
        <FontAwesomeIcon onClick={() => setIsProfilePopup(true)} icon={faUser} />

      </div>


{/**profile */}

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

{/***menu bar */}
      <div className={`fixed min-h-[100vh] top-0 right-0 h-full w-full flex ${isMenuBarVisible ? 'visible' : 'hidden'}`}>
        <div onClick={() => setIsMenuBarVisible(false)} className='flex flex-1 '>

        </div>
        <div className='flex flex-col w-[50vw] max-w-[400px] bg-[var(--primary-color)] py-4 items-start px-5'>
          <FontAwesomeIcon onClick={() => setIsMenuBarVisible(false)} className='cursor-pointer font-bold text-xl' icon={faX} />
          <div className='flex flex-col gap-4 mt-5'>

            <NavLink to={'/'} className='text-lg cursor-pointer '>Home</NavLink>
            <NavLink to='/menu' className='text-lg cursor-pointer '>Menu</NavLink>
            <NavLink to={'/orders'} className='text-lg cursor-pointer '>Orders</NavLink>
            <NavLink to={'/about'} className='text-lg cursor-pointer '>About</NavLink>
            <NavLink to='/contact' className='text-lg cursor-pointer '>Contact us</NavLink>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar