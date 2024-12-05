import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'
import React from 'react'


const Footer = () => {
  return (
    <div className='relative bottom-0 min-h-[200px] w-full flex flex-col'>
      <div className='w-full  md:flex flex-1 justify-between  bg-[rgba(0,0,0,0.1)] items-center px-5 py-5 text-center'>
       
        <h1 className='text-3xl font-bold text-[var(--primary-color)]'>The Nook Cafe </h1>
   
            <div className='flex gap-2 flex-1 items-center justify-center '>
              <p>The nook cafe is destination for your food cravings</p>
              {/* <p>About</p>
              <p>About</p>
              <p>About</p> */}
            </div>
            
   
        <div className='my-3 md:my-0 h-full flex flex-col text-start flex-1 items-center justify-center'>
<div className='flex gap-4 text-xl text-[rgba(0,0,0,0.7)]'>
 <FontAwesomeIcon icon={faEnvelope}/>
 <FontAwesomeIcon icon={faInstagram}/>
 <FontAwesomeIcon icon={faLinkedin}/>
 <FontAwesomeIcon icon={faTwitter}/>
  </div>
  <p>thenookcafe@gmail.com</p>
        </div>
      </div>
      <div className=' h-[30px] w-full bg-[rgba(0,0,0,1)]'></div>
    </div>
  )
}

export default Footer