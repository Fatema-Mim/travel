import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import pic from "../img/hero2.jpg"


const Subscribe = () => {
  return (
      <div>
          <div className='relative max-h-[280px]'>
              <div className='text-center absolute w-full h-full bg-black/70 flex justify-center items-center'>
                  <div>
                      <p className='text-[17px] uppercase text-white'>Keep in touch</p>
                      <h2 className="text-3xl capitalize text-white font-bold">Travel With Us</h2>
                      <div className='flex bg-white px-4 py-2 w-[300px] md:w-[400px] rounded-full mx-auto my-6'>
                          <input type="text" placeholder='Your Email ...' className='w-full placeholder:text-gray-500 focus:outline-none placeholder:text-sm text-gray-500 text-sm' />
                          <button type='submit'>
                              <RiSendPlaneFill size={20} className="fill-gray-500" />
                          </button>
                      </div>
                  </div>
              </div>
              <img src={pic} alt="bg" className='max-h-[280px] w-full object-cover' />
          </div>
    </div>
  )
}

export default Subscribe