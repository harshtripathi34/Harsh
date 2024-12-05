import React, { useContext, useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContext";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUserWithEmailAndPassword, logedInUser,resetPassword } =
    useContext(FirebaseAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await loginUserWithEmailAndPassword(email, password);

  };

  const handleResetPassword=()=>{
    if(email){
      resetPassword(email);
    }else{
      toast.error("Enter email")
    }
  }
  useEffect(()=>{
    if(logedInUser){
      navigate('/')
    }
  },[logedInUser])

  return (



    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center">
      <ToastContainer />
      <h1 className="text-3xl font-semibold mb-7 text-[var(--primary-color)]">The Nook Cafe</h1>
      <h1 className="text-4xl font-semibold mb-1">Admin login</h1>
      <p className="text-lg ">Hey Admin enter your details and get login to your account</p>

      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-[500px] max-w-[80vw] my-5">
        <input required onChange={(e) => setEmail(e.target.value)} className="px-4 py-3 border-2  rounded-md " name="email" type="email" placeholder="Enter your email address" />
        <input required onChange={(e) => setPassword(e.target.value)} className="px-4 py-3 border-2 rounded-md " name="password" type="password" placeholder="Enter your password" />
        <p onClick={handleResetPassword} className="text-end text-sm cursor-pointer hover:text-blue-800">Forgot password?</p>
        <button className="px-4 py-3 border-2 rounded-md bg-[var(--primary-color)] text-white hover:bg-[var(--btn-hover-color)] transition-all" type="submit">Log in</button>
      </form>

      <u>Only Admin  can login !</u>
    </div>

  )
};
