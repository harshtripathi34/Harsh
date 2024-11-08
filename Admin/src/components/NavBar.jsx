import React from 'react'
import { useContext } from 'react'
import {FirebaseAuthContext} from '../contexts/FirebaseAuthContext'
const NavBar = () => {
  const {logedInUser,logOut}=useContext(FirebaseAuthContext)
  return (
    <div className='w-full flex justify-between py-4 text-start'>
        <div>
        <div
        to={"/"}
        style={{ color: "var(--logo-color)" }}
        className={` font-bold font-sans text-3xl cursor-pointer `}
      >
        OminiOutfits
      </div>
            <p>Admin pannel</p>
        </div>
       <div className='text-end h-full '>
        <p className='break-all'>{logedInUser?.email}</p>

       <button onClick={logOut} className='py-1 px-4 mt-1  border-2 border-red-700 text-black hover:bg-red-700 hover:text-white rounded-full hover:border-red-700'>Logout</button>
       </div>


    </div>
  )
}

export default NavBar