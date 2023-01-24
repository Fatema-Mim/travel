import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'


function Package() {
  return (
    <div className='container mx-auto p-16 space-y-8'>
      <div className='text-center'>
        <p className='text-gray-600 text-[14px] uppercase tracking-widest '>Our proposal</p>
        <p className='text-gray-700/90 text-header capitalize font-bold'>our Destinations</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-8'>
        <div className='w-[360px] border'>
          <img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='h-[200px] object-cover w-full h-full'/>
          <div className='p-6 space-y-4 divide-y'>
            <div>
              <p className='text-[20px] text-[#555555] font-bold'>Berlin</p>
              <p className='flex'>
                <IoLocationOutline size={20} className="stroke-[#9A9A9A]" />
                <span className='text-[15px] text-[#9A9A9A] tracking-wider'>Europe</span>
              </p>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>cultural</p>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>Relax</p>
              </div>
              <p className='text-[25px] text-[#9A9A9A]'>500 $</p>
            </div>
            <div className='pt-4 space-y-6'>
              <p className='text-[14px] text-[#555555] text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe. Temporibus quidem obcaecati aspernatur vel inventore, tempore culpa cupiditate repudiandae!
              </p>
              <button className='text-[14px] bg-yellow-400 text-white px-4 py-2 rounded-full'>Details</button>
            </div>
          </div>
        </div>
        <div className='w-[360px] border'>
          <img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='h-[200px] object-cover w-full h-full'/>
          <div className='p-6 space-y-4 divide-y'>
            <div>
              <p className='text-[20px] text-[#555555] font-bold'>Berlin</p>
              <p className='flex'>
                <IoLocationOutline size={20} className="stroke-[#9A9A9A]" />
                <span className='text-[15px] text-[#9A9A9A] tracking-wider'>Europe</span>
              </p>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>cultural</p>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>Relax</p>
              </div>
              <p className='text-[25px] text-[#9A9A9A]'>500 $</p>
            </div>
            <div className='pt-4 space-y-6'>
              <p className='text-[14px] text-[#555555] text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe. Temporibus quidem obcaecati aspernatur vel inventore, tempore culpa cupiditate repudiandae!
              </p>
              <button className='text-[14px] bg-yellow-400 text-white px-4 py-2 rounded-full'>Details</button>
            </div>
          </div>
        </div>
        <div className='w-[360px] border'>
          <img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='h-[200px] object-cover w-full h-full'/>
          <div className='p-6 space-y-4 divide-y'>
            <div>
              <p className='text-[20px] text-[#555555] font-bold'>Berlin</p>
              <p className='flex'>
                <IoLocationOutline size={20} className="stroke-[#9A9A9A]" />
                <span className='text-[15px] text-[#9A9A9A] tracking-wider'>Europe</span>
              </p>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>cultural</p>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>Relax</p>
              </div>
              <p className='text-[25px] text-[#9A9A9A]'>500 $</p>
            </div>
            <div className='pt-4 space-y-6'>
              <p className='text-[14px] text-[#555555] text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, saepe. Temporibus quidem obcaecati aspernatur vel inventore, tempore culpa cupiditate repudiandae!
              </p>
              <button className='text-[14px] bg-yellow-400 text-white px-4 py-2 rounded-full'>Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Package