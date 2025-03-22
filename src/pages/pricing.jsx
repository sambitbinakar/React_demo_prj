import React from 'react'
import Price_card from '../components/Price_card'

function Pricing() {
  return (
    <div className='mt-10 md:mt-20 mx-4 md:mx-10 px-4 md:px-10'>
        <div className="flex items-center justify-center flex-col space-y-4 md:space-y-7">
            <div className="text-center">
                <h1 className="relative text-3xl md:text-5xl font-bold z-10">
                    Choose Your Plan
                </h1>
                <img src="./sec3-vector.png" alt="" className="absolute h-8 md:h-10 w-40 md:w-60 z-0 ml-16 md:ml-32"/>
            </div>
            <p className='text-center text-xs md:text-sm px-4'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:space-x-3 mx-2 md:mx-15 px-2 md:px-5">
            <Price_card type={"Free"} price={0} text={"Capture ideas and find them quickly"}/>
            <Price_card type={"Personal"} price={11.99} text={"Keep home and family on track"}/>
            <Price_card type={"Organization"} price={49.99} text={"Capture ideas and find them quickly"}/>
        </div>
    </div>
  )
}

export default Pricing