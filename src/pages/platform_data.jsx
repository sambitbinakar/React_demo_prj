import React from 'react'
import Button from '../components/Button'

function Plateform() {
  return (
    <div className='bg-secondary w-full overflow-hidden'>
        <div className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 py-4 sm:py-6 md:py-8 lg:py-10 container mx-auto  '>
            <div className='lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-16 relative'>
                {/* Image Container */}
                <div className="w-full order-2 md:order-1 px-4 sm:px-0 absolute top-0 left-1 z-0">
                    <img 
                        src="./platform.png" 
                        alt="Platform illustration" 
                        className='object-contain transform hover:scale-105 transition-transform duration-300 h-[550px]'
                    />
                </div>

                {/* Content Container */}
                <div className=" space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 px-4 sm:px-6 md:px-20 lg:px-12 order-1 md:order-2 mx-24 ">
                    <div className="text-center md:text-left relative flex items-center">
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10 tracking-tight text-white leading-tight mb-3'>
                            Your work, everywhere you are
                        </h1>
                        <img 
                            src="./sec3-vector.png" 
                            alt="" 
                            className='absolute h-8 sm:h-10 md:h-12 w-40 sm:w-52 md:w-72 z-0 left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0 -bottom-6'
                        />
                    </div>
                    <p className='text-sm sm:text-base md:text-lg text-center md:text-left text-white/90 max-w-[600px] mx-auto md:mx-0'>
                        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS.
                    </p>
                    <div className='flex justify-center md:justify-start pt-2 sm:pt-3 md:pt-4'>
                        <Button text={"Try Taskey"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plateform