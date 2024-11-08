import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faMagnifyingGlass, faShop } from '@fortawesome/free-solid-svg-icons' 
import { NavLink } from 'react-router-dom'
const Navbar = () => {

  return (
    <div className='w-full flex justify-between py-2 items-center sticky top-0 bg-white z-50'>
{/* //logo */}
<h1 className='text-4xl font-bold text-[var(--primary-color)]'>Harsh</h1>
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
  <FontAwesomeIcon icon={faUser}/>

</div>
 


    </div>
  )
}

export default Navbar