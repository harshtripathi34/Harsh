import React, { useContext, useEffect, useState } from "react";
import '../styles/Loginpage.css'
import { useNavigate } from "react-router-dom";



import {NavLink} from 'react-router-dom'

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FirebaseAuthContext} from '../contexts/FirebaseAuthContext'
export const Loginpage = () => {
  const navigate = useNavigate();
  const { loginUserWithEmailAndPassword,logedInUser,resetPassword } = useContext(FirebaseAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const successNotify = () => toast.success("Login successful");
  const warnNotify = () => toast.error("Wrong Email or password");

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await loginUserWithEmailAndPassword(email, password);
    if (user) {
      successNotify();
    } else {
      warnNotify();
    }
  };

  useEffect(()=>{
    if(logedInUser){
      navigate('/')
    }
  },[logedInUser])

  const handleResetPassword=()=>{
    if(email){
      resetPassword(email);
    }else{
      toast.error("Enter email")
    }
  }
  return (
  <div className="w-full md:flex gap-5 h-[100vh]  justify-center items-center">



<div className=" w-full h-full flex flex-col justify-center items-center">
    <ToastContainer/>
    
    <h1 className="text-3xl font-semibold mb-7 text-[var(--primary-color)]">The Nook Cafe</h1>
      <h1 className="text-4xl font-semibold mb-1">Welcom back</h1>
    <p className=" sbuheading "> Login to your account </p>
    
    <form onSubmit={handleLogin} className="flex flex-col gap-4  md:w-[40vw] w-[500px] max-w-[80vw] my-5">
    <input required onChange={(e)=>setEmail(e.target.value)} className="px-4 py-3 border-2  rounded-md " name="email" type="email" placeholder="Email address"/>
    <input required onChange={(e)=>setPassword(e.target.value)} className="px-4 py-3 border-2 rounded-md " name="password" type="password" placeholder="Password" />
    <p onClick={handleResetPassword} className="text-end text-sm cursor-pointer hover:text-blue-800">Forgot password?</p>
    <button className="px-4 py-3 border-2 rounded-md bg-[var(--primary-color)] text-white hover:bg-[var(--btn-hover-color)] transition-all"  type="submit">Sign in</button>
    </form>
    <p>Don't have an account ? <NavLink to={'/register'} className="cursor-pointer hover:underline text-[var(--primary-color)] font-semibold">Register now</NavLink></p>

       </div>


  </div>
  );
};
