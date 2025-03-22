import React from 'react'
import Client_card from '../components/Client_card'

function ClientPage() {
  return (
    <div className='flex flex-col items-center justify-center mt-5 md:mt-10 mx-4 md:mx-24 py-8 md:py-15 space-y-6 md:space-y-10'>
        <div className="text-center px-4">
            <h1 className="relative text-3xl md:text-5xl font-bold z-10">
              What Our Client Says
            </h1>
            <img
              src="./sec3-vector.png"
              alt=""
              className="absolute h-8 md:h-10 w-40 md:w-60 z-0 ml-16 md:ml-32"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 px-4 md:px-24 w-full">
            <Client_card/>
            <Client_card/>
            <Client_card/>
          </div>
    </div>
  )
}

export default ClientPage