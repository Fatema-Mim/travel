import React from 'react'

const Gallery = ({detailsData}) => {
  return (
    <div className='px-8 pb-14'>
          <p className='text-3xl font-bold text-slate-600 '>Gallery</p>
          <div className='grid grid-cols-4 gap-1 md:gap-4 pt-4'>
            <div>
                  <img src={detailsData?.pic1} alt="travel" className='w-full h-full object-cover' />
            </div>
            <div>
                  <img src={detailsData?.pic2} alt="travel" className='w-full h-full object-cover' />
            </div>
            <div>
                  <img src={detailsData?.pic8} alt="travel" className='w-full h-full object-cover' />
            </div>
            
            <div className='row-span-2'>
                  <img src={detailsData?.pic4} alt="travel" className='w-full h-full object-cover' />
            </div>
              <div>
                  <img src={detailsData?.pic5} alt="travel" className='w-full h-full object-cover' />
              </div>
            <div className='col-span-2'>
                  <img src={detailsData?.pic7} alt="travel" className='w-full h-full object-cover' />
            </div>
            
          </div>
    </div>
  )
}

export default Gallery