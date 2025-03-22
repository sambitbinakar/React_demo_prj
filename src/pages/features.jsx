import React from 'react'
import Button from '../components/Button'

function Features() {
  return (
    <div>
        <div className='w-full mx-auto mt-5 md:mt-10 py-3 md:py-5 relative bg-secondary' >
            <img 
                src="./hero-vector.png" 
                alt="" 
                className='w-full object-cover'
            />
            <div className="relative md:absolute top-0 md:top-5 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5 px-4 md:px-24 py-4 md:py-8">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <img 
                        src="./Apps.png" 
                        alt="Apps Integration" 
                        className='w-full max-w-[400px] mx-auto rounded-lg'
                    />
                </div> 
                <div className="w-full md:w-1/2 space-y-4 md:space-y-7 text-white text-center md:text-left order-1 md:order-2">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                        Work with Your Favorite Apps Using whitepace
                    </h1>
                    <p className='text-sm md:text-base px-2 md:px-0'>
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <Button text={"Read More"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features