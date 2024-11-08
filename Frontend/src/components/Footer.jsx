import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'
import React from 'react'


const Footer = () => {
  return (
    <div className='relative bottom-0 min-h-[200px] w-full flex flex-col'>
      <div className='w-full flex flex-1 bg-[rgba(0,0,0,0.1)] items-center'>
        <div className='w-[70%] h-full flex justify-center gap-4 items-center'>

          <h1 className='text-5xl font-bold text-[var(--primary-color)]'>Harsh </h1>
          <div className='h-[50px] w-[2px] bg-[rgba(0,0,0,0.5)]'></div>
          <div>
            <div className='flex gap-2'>
              <p>About</p>
              <p>About</p>
              <p>About</p>
              <p>About</p>
            </div>
            <p>@all rights reserved to the harsh corporation</p>
          </div>
        </div>
        <div className=' w-[30%] h-full  text-start'>
<div className='flex gap-4 text-xl text-[rgba(0,0,0,0.7)]'>
 <FontAwesomeIcon icon={faEnvelope}/>
 <FontAwesomeIcon icon={faInstagram}/>
 <FontAwesomeIcon icon={faLinkedin}/>
 <FontAwesomeIcon icon={faTwitter}/>
  </div>
  <p>harsh@gmail.com</p>
        </div>
      </div>
      <div className=' h-[30px] w-full bg-[rgba(0,0,0,1)]'></div>
    </div>
  )
}

export default Footer