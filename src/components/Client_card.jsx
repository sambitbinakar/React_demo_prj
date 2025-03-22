import React from 'react'

function Client_card() {
  return (
    <div className='w-full md:w-auto'>
        <div className="rounded-xl shadow-lg px-4 md:px-8 py-6 md:py-10 bg-[#eeeeee] text-secondary hover:bg-primary hover:text-white hover:scale-105 transition-all">
            <div className="border-b px-3 md:px-5 py-4 md:py-8 space-y-4 md:space-y-6">
                <img src="./comma.png" alt="" className='h-10 md:h-14' />
                <p className='text-xs md:text-sm'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
            </div>
            <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-5">
                <img src="./profile.png" alt="" className='h-10 md:h-14'/>
                <div className="">
                    <h2 className='text-base md:text-lg font-medium'>Obern Shaw, MCH</h2>
                    <p className='text-xs md:text-sm'>Head of talent Acquisition, North America</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client_card