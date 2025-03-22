import { ArrowRight} from 'lucide-react'
import React from 'react'
import Button from './button'

function Hero_main() {
  return (
    <div className='w-full mx-auto mt-10 md:mt-20 py-3 md:py-5 relative' >
        <img src="./hero-vector.png" alt="" className='my-5 md:my-10 w-full object-cover'/>
        <div className="relative md:absolute top-0 md:top-5 mx-4 md:mx-20 flex items-center gap-4 md:gap-5 flex-col md:flex-row px-4 md:px-10">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-white text-center md:text-left">
                <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
                    Get More Done with <br className='hidden md:block'/> whitepace
                </h1>
                <p className='font-medium text-sm md:text-base px-2 md:px-0'>
                    Project management software that enable your teams to collaborate, plan, analyze and manage everyday tasks
                </p>
                <div className='flex justify-center md:justify-start'>
                    <Button text={"Try Whitepace free"}/>
                </div>
            </div>
            <div className="w-full md:w-auto px-4 md:px-0">
                <img 
                    src="./hero-img.png" 
                    alt="Hero illustration" 
                    className='w-full md:h-[450px] md:w-[650px] rounded-lg object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero_main