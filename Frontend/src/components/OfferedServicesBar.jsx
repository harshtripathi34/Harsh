import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister, faHome, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-regular-svg-icons'

const OfferedServicesBar = () => {

    const offeredSerivices = [
        {
            sercieName: 'Home delivery',
            icons: faHome,
            smallDescription: 'We offer home delivery of foods'
        },
        {
            sercieName: 'Cash on delivery',
            icons: faMoneyBill,
            smallDescription: 'Pay when product is deleivered '
        },
        {
            sercieName: '24/7 customer support',
            icons: faHome,
            smallDescription: 'We offer home delivery of foods'
        }

    ]
    return (
        <div className='w-full flex gap-4 justify-between'>
            {
                offeredSerivices.map((service, index) => {
                    return <div className='bg-white rounded-xl px-6 py-2 border shadow-lg flex gap-2 w-[500px] '>

                        <div className='h-full aspect-square rounded-full text-black text-base flex items-center justify-center bg-[var(--secondary-color)]'>
                            <FontAwesomeIcon icon={service.icons} />
                        </div>

                        <div className='text-start'>
                            <h1 className='font-semibold '>{service.sercieName}</h1>
                            <p>{service.smallDescription}</p>
                        </div>
                    </div>
                })
            }</div>
    )
}

export default OfferedServicesBar