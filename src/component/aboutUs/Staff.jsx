import React from 'react'
import pic from "../../img/hero4.jpg"

const Staff = () => {
  return (
    <div>
        <div className='px-16 py-10 space-y-8'>
            <div className="flex space-x-4" >
              <img src={pic} alt="pic" className='h-56 w-full object-cover' />
              <div className='self-center'>
                <p className='text-[15px] text-gray-700 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque incidunt rerum, in rem nulla enim animi commodi quidem, veniam asperiores tempore perferendis ut sit sequi. Eius mollitia quia officiis neque dolor, eligendi laborum velit reprehenderit non exercitationem vel quod nobis nulla recusandae molestiae debitis, commodi possimus cupiditate ipsam aliquid assumenda vitae? Porro sit minima impedit quam natus quos! Quas.</p>
            <p className='pt-4 text-base text-gray-800 font-semibold text-left'>JHone Doe</p>
            <p className='text-sm text-gray-800 font-semibold text-left'>Founder of Travaler</p>
              </div>
            </div>
            <div className="flex space-x-4" >
              <div className='self-center'>
                <p className='text-[15px] text-gray-700 text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque incidunt rerum, in rem nulla enim animi commodi quidem, veniam asperiores tempore perferendis ut sit sequi. Eius mollitia quia officiis neque dolor, eligendi laborum velit reprehenderit non exercitationem vel quod nobis nulla recusandae molestiae debitis, commodi possimus cupiditate ipsam aliquid assumenda vitae? Porro sit minima impedit quam natus quos! Quas.</p>
                <p className='pt-4 text-base text-gray-800 font-semibold text-right'>JHone Doe</p>
                <p className='text-sm text-gray-800 font-semibold text-right'>Founder of Travaler</p>
              </div>
               <img src={pic} alt="pic" className='h-56 w-full object-cover' />
            </div>
            <div className='grid grid-cols-4 gap-4'>
                  <div className='text-center'>
                    <img src={pic} alt="pic" className='inline-block'/>
                    <div>
                      <p className='text-[15px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
                      <p className='pt-4 text-base text-gray-800 font-semibold'>Lee Dong Wook</p>
                      <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <img src={pic} alt="pic" className='inline-block'/>
                    <div>
                      <p className='text-[15px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
                      <p className='pt-4 text-base text-gray-800 font-semibold'>Lee Dong Wook</p>
                      <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <img src={pic} alt="pic" className='inline-block'/>
                    <div>
                      <p className='text-[15px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
                      <p className='pt-4 text-base text-gray-800 font-semibold'>Lee Dong Wook</p>
                      <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <img src={pic} alt="pic" className='inline-block'/>
                    <div>
                      <p className='text-[15px] text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit impedit nemo voluptatibus totam alias magni placeat, blanditiis sint! Dolor.</p>
                      <p className='pt-4 text-base text-gray-800 font-semibold'>Lee Dong Wook</p>
                      <p className='text-sm text-gray-800 font-semibold'>Senior Staff</p>
                    </div>
                  </div>
                  
            </div>
            <div className='grid grid-cols-4 gap-4 text-center'>
              <div>
                <p>150</p>
                <p>Packages</p>
              </div>
              <div>
                <p>50</p>
                <p>Countries</p>
              </div>
              <div>
                <p>80</p>
                <p>Emploies</p>
              </div>
              <div>
                <p>200</p>
                <p>Tour Guide</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Staff