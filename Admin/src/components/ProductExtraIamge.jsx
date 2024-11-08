import React, { useState } from 'react'

export const ProductExtraIamge = ({inputChange,fieldName}) => {
  const [selectedImage,setSelectedImage]=useState();
  const handleImageChange=(e)=>{
    const image=e.target.files[0]
    console.log("image :",image)
    setSelectedImage(image)
  }
  return (
    <div id='thumbaniImage'  className='w-[200px] h-[150px] rounded-xl bg-[var(--secondary-color)] flex justify-center items-center  text-xl text-[rgba(0,0,0,0.6)] cursor-pointer relative border-[var(--primary-color)] border-2'>
      <input  name={fieldName} onChange={(e)=>{handleImageChange(e),inputChange(e)}
      }className='absolute h-full w-full opacity-0 z-40' type='file' />

   

      {
       selectedImage?<img className='h-full' src={URL.createObjectURL(selectedImage)}/>: <i class="fa-regular fa-images  text-[rgba(0,0,0,0.5)]"></i>
      }

    </div>
  )
}
