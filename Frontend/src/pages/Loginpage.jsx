import React, { useContext, useEffect, useState } from "react";
import '../styles/Loginpage.css'
import { useNavigate } from "react-router-dom";



import {NavLink} from 'react-router-dom'

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FirebaseAuthContext} from '../contexts/FirebaseAuthContext'
export const Loginpage = () => {
  const navigate = useNavigate();
  const { loginUserWithEmailAndPassword,logedInUser } = useContext(FirebaseAuthContext);
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
  return (
  <div className="w-full md:flex gap-5 h-[100vh]  justify-center items-center">



<div className="md:w-1/2 w-full h-full flex flex-col justify-center items-center">
    <ToastContainer/>
    
   <h1 className="heading">Welcom back !</h1>
    <p className=" sbuheading ">hii thre welcom back , login to your account </p>
    
    <form onSubmit={handleLogin} className="flex flex-col gap-4  md:w-[40vw] w-[500px] max-w-[80vw] my-5">
    <input required onChange={(e)=>setEmail(e.target.value)} className="px-4 py-3 border-2  rounded-md " name="email" type="email" placeholder="Email address"/>
    <input required onChange={(e)=>setPassword(e.target.value)} className="px-4 py-3 border-2 rounded-md " name="password" type="password" placeholder="Password" />
    <button className="px-4 py-3 border-2 rounded-md bg-[var(--primary-color)] text-white hover:bg-[var(--btn-hover-color)] transition-all"  type="submit">Sign in</button>
    </form>
    <p>Don't have an account ? <NavLink to={'/register'} className="cursor-pointer hover:underline text-[var(--primary-color)] font-semibold">Register now</NavLink></p>

       </div>

       <div className="md:w-1/2 login-visual-part w-full flex items-center justify-center bg-[var(--primary-color)] h-full">
  <h1 className="text-5xl font-bold text-white">The Nook Cafe</h1>
</div>
  </div>
  );
};