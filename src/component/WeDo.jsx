import React from 'react'
import icon1 from '../img/wedo/icon-around.png'
import icon2 from '../img/wedo/icon-boat.png'

const WeDo = () => {
  return (
    <div className='px-16 py-10'>
        <div className='grid grid-cols-3 gap-6'>
            <div className='text-center space-y-3'>
                <img src={icon1} alt="around" className='object-cover inline-block' />
                <h2 className='text-3xl text-gray-700 font-bold'>World Tour</h2>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum minima quam voluptatibus neque, error sapiente.</p>
            </div>
            <div className='text-center space-y-3'>
                <img src={icon2} alt="around" className='object-cover inline-block' />
                <h2 className='text-3xl text-gray-700 font-bold'>World Tour</h2>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum minima quam voluptatibus neque, error sapiente.</p>
            </div>
            <div className='text-center space-y-3'>
                <img src={icon1} alt="around" className='object-cover inline-block' />
                <h2 className='text-3xl text-gray-700 font-bold'>World Tour</h2>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum minima quam voluptatibus neque, error sapiente.</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default WeDo