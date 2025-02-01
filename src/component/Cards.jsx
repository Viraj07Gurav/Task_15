import React from 'react'
import box from "../assets/box.webp"
import coupon from "../assets/coupon.png"
import download from "../assets/downloadimg.png"
import potimg from "../assets/download.png"

function Cards() {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-2 gap-4'>
                <div className=' bg-white rounded-2xl relative hover:bg-gradient-to-r from-[#fff9e3] via-[#ffe0ef] to-[#ffcec7] hover:scale-105 hover:shadow-xl '>
                    <p className='p-3 mb-10 font-semibold hover:scale-105 '>Up to <span className='text-red-700 text-xl'>$300</span><br />
                        of Free Products</p>
                    <div className='
                        absolute bottom-0 right-0'>
                        <img src={box} alt="" className='h-15 w-16 float-right' />
                    </div>

                </div>
                <div className=' bg-white rounded-2xl relative hover:bg-gradient-to-r from-[#fff9e3] via-[#ffe0ef] to-[#ffcec7] hover:scale-105 hover:shadow-xl'>
                    <p className='p-3 mb-10 font-semibold' ><span className='text-red-800 text-xl font-bold'>50%</span><br />OFF Coupons for
                        your followers</p>

                    <div className='
                        absolute bottom-0 right-0'>
                        <img src={coupon} alt="" className='h-15 w-16 ' />
                        {/* <img src={box} alt="" className='h-15 w-16 float-right' /> */}
                    </div>
                </div>
                <div className=' bg-white rounded-2xl relative hover:bg-gradient-to-r from-[#fff9e3] via-[#ffe0ef] to-[#ffcec7] hover:scale-105 hover:shadow-xl'>
                    <p className='p-3 mb-10 font-semibold'>Up to <span className='text-xl text-red-800'>20%</span> Commission per new user order</p>
                    

                    <div className='absolute  bottom-0 right-0  '>
                    <img src={potimg} alt="" className='h-15 w-16' />
                        {/* <img src={box} alt="" className='h-15 w-16 float-right' /> */}
                    </div>
                </div>
                <div className=' bg-white rounded-2xl relative hover:bg-gradient-to-r from-[#fff9e3] via-[#ffe0ef] to-[#ffcec7] hover:scale-105 hover:shadow-xl'>
                    <p className='p-3 mb-10 font-semibold'><span className='text-red-800 text-xl'>5%</span> per new App
                        download and login</p>
                    

                    <div className='absolute bottom-0 right-0'>
                    <img src={download} alt="" className='h-12 mt-2 w-16 ml-10 ' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cards