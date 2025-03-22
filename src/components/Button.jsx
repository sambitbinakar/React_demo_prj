import { ArrowRight } from 'lucide-react'
import React from 'react'

function Button({text}) {
  return (
    <div className='w-full md:w-auto'>
        <button className='w-full md:w-auto px-4 md:px-6 py-2 md:py-3 bg-primary rounded-lg text-sm md:text-base font-semibold text-white flex gap-2 md:gap-3 items-center justify-center md:justify-start tracking-tight'>{text} <ArrowRight size={18}/></button>
    </div>
  )
}

export default Button