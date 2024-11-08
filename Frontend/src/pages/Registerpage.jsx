import React, { useContext, useEffect, useState } from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import '../styles/Loginpage.css'

import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Registerpage = () => {

  const navigate=useNavigate();

  const {registerUserWithEmailAndPassword,logedInUser}=useContext(FirebaseAuthContext)
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');



  const handleSignup=async(e)=>{


    e.preventDefault();
  
const user=await registerUserWithEmailAndPassword(email,password)


  }

  useEffect(()=>{
    if(logedInUser){
      navigate('/')
    }
  },[])
  return (

    <div className=' w-full md:flex gap-5 h-[100vh]  justify-center items-center '>

<div className="md:w-1/2 h-full flex flex-col justify-center items-center">
    <ToastContainer/>
    
    <h1 className='heading'>Create a  new account !</h1>
    <p className="subheading ">create a new account and get registerd on Ink & Pages </p>
    
    <form onSubmit={handleSignup} className="flex flex-col gap-4 md:w-[40vw] w-[500px] max-w-[80vw] my-5">
      <div className='flex gap-2 justify-between'>
      <input  required onChange={(e)=>setFirstName(e.target.value)} className="px-4 py-3 border-2  rounded-md w-full" name="firstname" type="text" placeholder="First name"/>
    <input required onChange={(e)=>setLastName(e.target.value)} className="px-4 py-3 border-2 rounded-md w-full " name="lastname" type="text" placeholder="Last name" />
      </div>
    <input required onChange={(e)=>setEmail(e.target.value)} className="px-4 py-3 border-2  rounded-md " name="email" type="email" placeholder="Email address"/>
    <input required onChange={(e)=>setPassword(e.target.value)} className="px-4 py-3 border-2 rounded-md " name="password" type="password" placeholder="Enter your password" />
    <button className="px-4 py-3 border-2 rounded-md bg-[var(--primary-color)] text-white hover:bg-[var(--btn-hover-color)] transition-all"  type="submit">Register</button>
    </form>
    <p>You already have an account ? <NavLink to={'/login'} className="cursor-pointer hover:underline text-[var(--primary-color)] font-semibold">Login</NavLink></p>

       </div>
       <div className="md:w-1/2 flex items-center justify-center bg-[var(--primary-color)] h-full .login-visual-part">
       <h1 className="text-5xl font-bold text-white">Ink & Pages</h1>

</div>
    </div>
    
  )
}
