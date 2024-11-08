import React from 'react'

import ExclusiveOffers from './ExclusiveOffers'
import { exclusiveOffers } from '../assets/exclusiveOffers'

export const ExclusiveOffersBar = () => {

   
  return (
    <div className='w-full flex gap-5  py-6 justify-between flex-wrap'>
{
    exclusiveOffers.map((offer)=><ExclusiveOffers foodImage={offer.foodImage} foodName={offer.foodName} discountPercent={offer.discountPercent}/>)
}
    </div>
  )
}
