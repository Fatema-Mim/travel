import React from 'react'
import we1 from "../../img/weare/we1.jpeg"
import we2 from "../../img/weare/we2.jpeg"
import we3 from "../../img/weare/we3.jpeg"
import we4 from "../../img/weare/we4.jpeg"
import we5 from "../../img/weare/we5.jpeg"
import we6 from "../../img/weare/we6.jpeg"


const Staff = () => {
  return (
    <div>
      <div className='px-6 md:px-16 py-16 space-y-12'>
        <div className="flex flex-col md:flex-row md:space-x-4" >
          <img src={we1} alt="pic" className='h-[500px] w-auto object-cover' />
          <div className='self-center text-center md:text-left'>
            <p className='text-[15px] text-gray-700 pt-6 md:pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque incidunt rerum, in rem nulla enim animi commodi quidem, veniam asperiores tempore perferendis ut sit sequi. Eius mollitia quia officiis neque dolor, eligendi laborum velit reprehenderit non exercitationem vel quod nobis nulla recusandae molestiae debitis, commodi possimus cupiditate ipsam aliquid assumenda vitae? Porro sit minima impedit quam natus quos! Quas.</p>
            <p className='pt-4 text-base text-gray-800 font-semibold '>JHone Doe</p>
            <p className='text-sm text-gray-800 font-semibold '>Founder of Traveler</p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:space-x-4" >
          <div className='self-center text-center md:text-right'>
            <p className='text-[15px] text-gray-700 pt-6 md:pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque incidunt rerum, in rem nulla enim animi commodi quidem, veniam asperiores tempore perferendis ut sit sequi. Eius mollitia quia officiis neque dolor, eligendi laborum velit reprehenderit non exercitationem vel quod nobis nulla recusandae molestiae debitis, commodi possimus cupiditate ipsam aliquid assumenda vitae? Porro sit minima impedit quam natus quos! Quas.</p>
            <p className='pt-4 text-base text-gray-800 font-semibold '>Jhon Smith</p>
            <p className='text-sm text-gray-800 font-semibold '>CEO of Traveler</p>
          </div>
          <img src={we2} alt="pic" className='h-[500px] w-auto object-cover' />
        </div>
        <div className='grid md:grid-cols-4 gap-6'>
          
          <div className='text-center'>
            <img src={we3} alt="pic" className='inline-block h-[250px] w-[250px] object-cover' />
            <div>
              <p className='text-[15px] text-gray-700 pt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
              <p className='pt-2 text-base text-gray-800 font-semibold'>Lee Dong Wook</p>
              <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
            </div>
          </div>
          <div className='text-center'>
            <img src={we4} alt="pic" className='inline-block h-[250px] w-[250px] object-cover' />
            <div>
              <p className='text-[15px] text-gray-700 pt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
              <p className='pt-2 text-base text-gray-800 font-semibold'>Sophia</p>
              <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
            </div>
          </div>
          <div className='text-center'>
            <img src={we5} alt="pic" className='inline-block h-[250px] w-[250px] object-cover' />
            <div>
              <p className='text-[15px] text-gray-700 pt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
              <p className='pt-2 text-base text-gray-800 font-semibold'>Olivia</p>
              <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
            </div>
          </div>
          <div className='text-center'>
            <img src={we6} alt="pic" className='inline-block h-[250px] w-[250px] object-cover' />
            <div>
              <p className='text-[15px] text-gray-700 pt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
              <p className='pt-2 text-base text-gray-800 font-semibold'>Charlotte</p>
              <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Staff