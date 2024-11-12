import React, { useContext } from "react";
import {NavLink} from 'react-router-dom'

import { FirebaseAuthContext } from "../contexts/FirebaseAuthContext";
const SideBar = () => {
  const {logedInUser,logOut} =useContext(FirebaseAuthContext)
  return (
  <>
    <div className=" py-6 flex flex-col w-[300px] gap-5 bg-[var(--secondary-color)]   top-0 left-0 min-h-[100vh]  sidebar">
<div className="w-full mb-10 px-5">
<h1 className="text-3xl font-bold text-[var(--primary-color)]">The Nook Cafe</h1>
<p>{logedInUser?.email}</p>
<button onClick={logOut} className="border-red-600 border-2 rounded-xl hover:bg-red-600 text-black b px-4 mt-4 ">Logout</button>
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
    <div className="flex gap-5 w-full sm:hidden px-4">
<NavLink to={'/'} className={({isActive})=>`px-4 py-1 rounded-full border-2 border-[var(--primary-color)] ${isActive?'bg-[var(--primary-color)]':''}`}>
  Add items
</NavLink>
<NavLink to={'listedProducts'} className={({isActive})=>`px-4 py-1 rounded-full border-2 border-[var(--primary-color)] ${isActive?'bg-[var(--primary-color)]':''}`}>
  Listed items
</NavLink>
<NavLink to={'orders'} className={({isActive})=>`px-4 py-1 rounded-full border-2 border-[var(--primary-color)] ${isActive?'bg-[var(--primary-color)]':''}`}>
 Orders
</NavLink>
    </div>
  </>
  );
};

export default SideBar;
