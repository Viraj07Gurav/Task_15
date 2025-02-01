import React from 'react'
import qr from '../assets/qr.png'

function Footer() {
  return (
    <div className='grid grid-cols-2 gap-2 bg-white mt-3'>
        <div className='mt-4'>
            <p className='text-2xl font-extrabold text-gray-800 '>
            How to join?
            </p>
            <div className='flex gap-2'>
                <div flex  >
                    <div className='h-6 w-6 text-center rounded-full bg-orange-400 text-white border mt-3'> <p>1</p></div>
                    <div className='h-6 w-6 text-center rounded-full bg-orange-400 text-white border mt-3'> <p>2</p></div>
                    <div className='h-6 w-6 text-center rounded-full bg-orange-400 text-white border mt-3'> <p>3</p></div>
                   
            
                </div>
                <div className='text-left '>
                    <p className='mt-3'>Scan Qr code</p>
                    <p className='mt-3'>Join the Program</p>
                    <p className='mt-3'>Post & earn</p>
                </div>

            </div>
        </div>
        <div className='mt-5'>
           <div className='border-gray-200 border-8 flex justify-center h-30 w-30  rounded-xl hover:scale-105'>
            <img src={qr} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Footer