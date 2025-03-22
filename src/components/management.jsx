import React from 'react'
import Button from './button'

function Management() {
  return (
    <div className='relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 py-4 sm:py-6 md:py-8'>
        <img 
            src="./manage-vector.png" 
            alt="" 
            className='md:h-96 object-cover opacity-50 md:opacity-100'
        />
        <div className="relative md:absolute top-0 w-full flex flex-col md:flex-row items-center gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-20 py-4">
            <div className="w-full md:w-1/3 space-y-4 md:space-y-5 lg:space-y-7 px-4 md:mx-8 lg:mx-12 text-center md:text-left">
                <div className="relative">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold z-10 leading-tight'>
                        Project <br className='hidden md:block'/> Management
                    </h1>
                    <img 
                        src="./sec3-vector.png" 
                        alt="" 
                        className='absolute h-8 sm:h-10 w-40 sm:w-60 z-0 left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0'
                    />
                </div>
                <p className='text-sm sm:text-base lg:text-lg'>
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <Button text={"Get Started"}/>
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <img 
                    src="./management.png" 
                    alt="management" 
                    className='w-full max-w-[500px] mx-auto h-auto md:h-[350px] object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                />
            </div>
        </div>
    </div>
  )
}

export default Management