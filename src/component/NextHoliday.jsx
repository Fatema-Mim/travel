import React from 'react'
import { Link } from "react-router-dom"
import nextholiday from "../img/nexthero.png"

function NextHoliday() {
  return (

    <div className='relative'>
      <div className='relative h-[300px]'>

        <div className='absolute w-full h-full bg-black/40'>
          <div className='flex flex-col md:flex-row justify-center mt-20 space-x-10 px-6'>
            <div className='text-header  text-white font-bold'>
              <p>Your</p>
              <p>Next Holiday</p>
            </div>
            <Link to="/packages" className='bg-white text-[16px] text-[#f76570] px-4 py-1 rounded-full self-end mt-5 md:mt-0'>
              <button className='uppercase tracking-widest'>
                view All package
              </button>
            </Link>
          </div>
        </div>
        <img src={nextholiday} alt="bg" className='h-[300px] w-full object-cover ' />
      </div>

    </div>
  )
}

export default NextHoliday