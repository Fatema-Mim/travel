import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'


const DetailsHero = ({detailsData}) => {
  // console.log({detailsData})
  return (
    <div className='relative'>
      <div className='relative h-[400px]'>

        <div className='absolute w-full h-full bg-black/40'>
          <div className='z-20 px-14'>
            <div className='mt-64 md:mt-56'>
              <p className='text-2xl md:text-5xl font-[700] text-white'>{detailsData?.name}</p>
              <div className='text-white space-x-3 flex mt-2'>
                <p className='flex space-x-1'> <GoLocation size={18} className="self-center"/> <span className='self-center'>{detailsData?.country}</span> </p>
                <p className='flex space-x-1'><AiOutlineClockCircle size={18} className='self-center'/> <span className='self-center'>{detailsData?.day1} - {detailsData?.day2} Days</span>  </p>
              </div>
            </div>
          </div>
        </div>
        <img src={detailsData?.main} alt="bg" className='h-[400px] w-full object-cover ' />
      </div>

    </div>
  )
}

export default DetailsHero