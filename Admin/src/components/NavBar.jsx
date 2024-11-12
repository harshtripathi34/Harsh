import React from 'react'
import { useContext } from 'react'
import {FirebaseAuthContext} from '../contexts/FirebaseAuthContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  const {logedInUser,logOut}=useContext(FirebaseAuthContext);
  const [isSideBar,setIsSidebar]=useState(false);
  return (
    <div className='w-full px-5 sm:hidden flex justify-between py-4 text-start'>
          <div
        to={"/"}
        style={{ color: "var(--logo-color)" }}
        className={` font-bold font-sans text-3xl cursor-pointer `}
      >
        The Nook cafe
      </div>
  <FontAwesomeIcon className='cursor-pointer' onClick={()=>setIsSidebar(true)} icon={ faUser}/>



 <div className={`w-full flex min-h-[100vh] fixed top-0 right-0 z-50
   ${isSideBar?'visible':'hidden'}`}>

<div onClick={()=>setIsSidebar(false)} className='flex-1'></div>
  
  <div className= {` py-6 flex flex-col w-[300px] gap-5 bg-[var(--primary-color)]   top-0 left-0 min-h-[100vh]  `}>
<div className="w-full mb-10 px-5">
<h1 className="text-3xl font-bold text-[var(--primary-color)]">The Nook Cafe</h1>
<p>{logedInUser?.email}</p>
<button className="border-red-600 border-2 rounded-xl hover:bg-red-600 text-black b px-4 mt-4 ">Logout</button>
</div>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-full  px-4 py-2 flex justify-center items-center cursor-pointer text-start ${
            isActive ? "bg-[var(--primary-color)] text-white " : ""
          }`
        }
      >
       Add  item
      </NavLink>

      <NavLink
        to="listedProducts"
        className={({ isActive }) =>
          `w-full text-start  px-4 py-2 flex justify-center items-center cursor-pointer  ${
            isActive ? "bg-[var(--primary-color)] text-white" : ""
          }`
      }
      >
        Listed items
      </NavLink>
      <NavLink
        to="orders"
        className={({ isActive }) =>
        `w-full  px-4 text-start py-2 flex justify-center items-center cursor-pointer  ${
          isActive ? "bg-[var(--primary-color)] text-white" : ""
        }`
      }
      >
        Orders
      </NavLink>
    </div>
    </div>
 </div>
  
  )
}

export default NavBar