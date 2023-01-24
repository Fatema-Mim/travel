import React from 'react'
import pic from "../../img/hero4.jpg"
import { useLocation } from "react-router-dom";

const AboutHero = () => {
    const { pathname } = useLocation();
  return (
      <div className='relative'>
          <div className='relative max-h-[350px]'>

              <div className='absolute w-full h-full bg-black/40'>
                  <div className='z-20 px-14'>
                      <div className='mt-56'>
                          {
                            pathname.includes("aboutus") && (
                                  <p className='text-5xl font-[700] text-white'>About Us</p>
                            )
                          }
                          {
                            pathname.includes("contact") && (
                                  <p className='text-5xl font-[700] text-white'>Contact Us</p>
                            )
                          }
                      </div>
                  </div>
              </div>
              <img src={pic} alt="bg" className='max-h-[350px] w-full object-cover ' />
          </div>
          
      </div>
  )
}

export default AboutHero