import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const features = [
    "Sync unlimited devices",
   "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
   "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks"
]

function Price_card({type, price, text}) {
  return (
    <div className='w-full md:w-auto mt-5 md:mt-10 py-5 md:py-10 px-3 md:px-5'>
        <div className="border border-[#FFE492] px-4 md:px-7 py-6 md:py-8 space-y-4 rounded-lg hover:bg-secondary hover:scale-105 hover:text-[#FFE492]">
            <h3 className='font-semibold text-base md:text-lg'>{type}</h3>
            <h2 className='text-lg md:text-xl font-semibold'>${price}</h2>
            <p className='text-xs md:text-sm'>{text}</p>
            {features.map((text,index)=>(
                <li key={index} className='flex items-center gap-3 md:gap-5 text-xs md:text-sm'><CircleCheckBig size={15} className=''/>{text}</li>
            ))}
            <button className='w-full md:w-auto px-3 py-2 border border-[#FFE492] flex items-center justify-center text-sm rounded-lg font-medium hover:bg-primary hover:border-0'>Get Started</button>
        </div>
    </div>
  )
}

export default Price_card