import React from 'react'
import { BsFillPlusSquareFill } from "react-icons/bs"

const DayPackage = ({detailsData}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-10 py-16 space-y-4 md:space-y-0 space-x-0 md:space-x-8'>
        <div>
            <img src={detailsData?.pic2} alt="travel" className='w-full h-[450px] object-cover' />
        </div>
        <div className='col-span-2 space-y-6'>
              <p className='text-3xl font-bold text-slate-600'>Day By Day</p>
              <p className='text-slate-800 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quibusdam fuga sit quidem debitis adipisci dolore amet temporibus beatae dignissimos ipsum consectetur fugit, cupiditate nesciunt ut voluptatem facilis illum doloribus, corrupti rem praesentium culpa reiciendis aspernatur eveniet! Ipsam provident aliquid quas ullam voluptate suscipit repellendus fuga magnam neque nesciunt, unde voluptatum error facilis hic tempora harum impedit id ducimus? Molestias doloribus vitae aspernatur commodi laboriosam, maxime quos cum veritatis molestiae vel, fuga eius a nostrum libero optio debitis illo! Repellendus!</p>
              <div className='text-slate-800 space-y-4'>
                <div className='flex space-x-2'>
                    <BsFillPlusSquareFill size={20} className='text-yellow-400 self-center' />
                    <p className='self-center'><span className='font-semibold'>DAY 1 - </span> Departure at the airport and arrival at the hotel</p>
                    
                </div>
                <div className='flex space-x-2'>
                    <BsFillPlusSquareFill size={20} className='text-yellow-400 self-center' />
                      <p className='self-center'><span className='font-semibold'>DAY 2 - </span>Visit the main museums and lunch included</p>
                    
                </div>
                <div className='flex space-x-2'>
                    <BsFillPlusSquareFill size={20} className='text-yellow-400 self-center' />
                    <p className='self-center'><span className='font-semibold'>DAY 3 - </span>Excursion in the natural oasis and picnic</p>
                    
                </div>
                <div className='flex space-x-2'>
                    <BsFillPlusSquareFill size={20} className='text-yellow-400 self-center' />
                      <p className='self-center'><span className='font-semibold'>DAY 4 - </span> Transfer to the airport and return to the agency</p>
                    
                </div>
                <div className='flex space-x-2'>
                    <BsFillPlusSquareFill size={20} className='text-yellow-400 self-center' />
                    <p className='self-center'><span className='font-semibold'>DAY 5 - </span> Departure at the airport and arrival at the hotel</p>
                    
                </div>
                <div className='flex space-x-2'>
                    <BsFillPlusSquareFill size={20} className='text-yellow-400 self-center' />
                    <p className='self-center'><span className='font-semibold'>DAY 6 - </span> Departure at the airport and arrival at the hotel</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default DayPackage