import React from 'react'
import Button from '../components/Button'

function FreetrialPage() {
  return (
    <div className='bg-secondary text-white'>
        <div className="flex flex-col items-center justify-center space-y-7 py-14 ">
          <h1 className='text-5xl font-bold text-center '>Try Whaitpace <br /> today</h1>
        <p className='text-center text-sm'>Get started for free. <br />
        Add your whole team as your needs grow.</p>
        <Button text={"Try TasKey free"}/>
        <p>On a big team? Contact sales</p>
        <img src="./complogo.png" alt="" className='h-10 object-contain'/>  
        </div>
    </div>
  )
}

export default FreetrialPage