import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const PackageCard = ({pack}) => {
  return (
    <div className='border'>
          <img src={pack.main} alt={pack.name} className='h-[300px] object-cover w-full '/>
          <div className='p-6 space-y-4 divide-y'>
            <div>
              <p className='text-[20px] text-[#555555] font-bold'>{pack.name}</p>
              <p className='flex mt-2'>
                <IoLocationOutline size={20} className="stroke-[#9A9A9A]" />
                <span className='text-[15px] text-[#9A9A9A] tracking-wider'>{pack.continent}</span>
              </p>
            </div>
            <div className='flex items-center justify-between pt-4'>
              <div>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>{pack.category1}</p>
                <p className='text-[13px] text-[#555555] uppercase tracking-wider'>{pack.category2}</p>
              </div>
              <p className='text-[25px] text-[#9A9A9A]'>{pack.price} $</p>
            </div>
            <div className='pt-4 '>
              <p className='text-[14px] text-[#555555] text-justify'>{pack.description}</p>
              <Link to={`/${pack.name}`}><button className='text-[14px] bg-yellow-400 text-white px-6 py-2 rounded-full mt-2'>Details</button></Link>
            </div>
          </div>
        </div>
  )
}

export default PackageCard