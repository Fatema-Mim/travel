import React from 'react'
import hero from '../img/hero2.jpg'

function Beache() {
  return (
    <div className='p-16'>
        <div className='grid grid-cols-3 gap-8'>
            <div className='space-y-6'>
                <div>
                      <p className='text-gray-600 text-[14px] uppercase tracking-widest'>Noth America</p>
                      <p className='text-header text-gray-700/90 font-bold capitalize'>The Best Beaches</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum veritatis non quisquam dignissimos rerum possimus facere quidem aliquam omnis provident.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum veritatis non quisquam dignissimos rerum possimus facere quidem aliquam omnis provident.</p>
                <p><span className='text-[28px]'>500$</span> / persone</p>
                <button className='bg-[#1bbc9b] text-[14px] text-white uppercase tracking-widest px-6 py-1.5 rounded-full'>Book Now</button>
            </div>
            <div className='col-span-2 relative'>
                <img src={hero} alt="" className='w-full h-full object-cover' />
                  <div className='absolute w-2/3 bg-[#14b9d5] text-white flex justify-between text-center -bottom-14 left-28  p-8'>
                    <div className='tracking-widest'>
                        <p className='text-[28px] font-bold'>000</p>
                        <p className='uppercase'>Days</p>
                    </div>
                    <div className='tracking-widest'>
                        <p className='text-[28px] font-bold'>00</p>
                        <p className='uppercase'>Hours</p>
                    </div>
                    <div className='tracking-widest'>
                        <p className='text-[28px] font-bold'>00</p>
                        <p className='uppercase'>Minutes</p>
                    </div>
                    <div className='tracking-widest'>
                        <p className='text-[28px] font-bold'>00</p>
                        <p className='uppercase'>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beache