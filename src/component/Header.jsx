import React from 'react'

function Header() {
  return (
    <div className="mt-1">
        <div className='flex '>
            <div className='bg-orange-500 h-12 w-16 bg-orange-500 text-white p-2 rounded-xl hover:scale-110 transition-transform duration-300 hover:rotate-6'>
            <img src="" alt="" className='h-10 w-14 p-0'/>
            </div>
            
            <h2 className='text-2xl font-extrabold italic text-[#47341f] '>Welcome to TEMU
            Influencer Program</h2>
        </div>
        <p className=' mt-2 text-[#8f837b] dark:text-gray-600 text-base'>
        We are looking for content creators to help us
        spread the word about Temu on social media!
        </p>
    </div>
  )
}

export default Header