import React from 'react'
import { Link } from "react-router-dom"

function NextHoliday() {
  return (
    <div className='bg-rose-400 h-64 flex items-center justify-center'>
        <div className='flex items-center space-x-10'>
            <div className='text-header  text-white font-bold'>
                  <p>Your</p>
                  <p>Next Holiday</p>
            </div>
              <Link to="" className='bg-white text-[16px] text-[#f76570] px-4 py-1 rounded-full self-end'>
                  <button className='uppercase tracking-widest'>
                      view All package
                  </button>
              </Link>
        </div>
    </div>
  )
}

export default NextHoliday