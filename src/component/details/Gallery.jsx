import React from 'react'
import pic from '../../img/hero3.jpg'

const Gallery = () => {
  return (
    <div className='px-8 pb-14'>
          <p className='text-3xl font-bold text-slate-600 py-10'>Gallery</p>
          <div className='grid grid-cols-4 gap-4'>
            <div>
                  <img src={pic} alt="travel" className='w-full h-full object-cover' />
            </div>
            <div>
                  <img src={pic} alt="travel" className='w-full h-full object-cover' />
            </div>
            <div>
                  <img src={pic} alt="travel" className='w-full h-full object-cover' />
            </div>
            
            <div className='row-span-2'>
                  <img src={pic} alt="travel" className='w-full h-full object-cover' />
            </div>
              <div>
                  <img src={pic} alt="travel" className='w-full h-full object-cover' />
              </div>
            <div className='col-span-2'>
                  <img src={pic} alt="travel" className='w-full h-full object-cover' />
            </div>
            
          </div>
    </div>
  )
}

export default Gallery