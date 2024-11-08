import React from 'react'

const MainHeading = ({text}) => {
  return (
   
<div className="w-full flex justify-around  items-center text-3xl font-semibold mt-10 mb-3">
      <div className="h-[1px] bg-[var(--primary-color)] w-[40px]">

      </div>
      {text}
      <div className="h-[1px] bg-[var(--primary-color)] w-[40px]">

</div>
    </div>
   
  )
}

export default MainHeading