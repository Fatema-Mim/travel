import React from 'react'
import pic from "../../img/hero4.jpg"
import { useLocation } from "react-router-dom";

const AboutHero = () => {
    const { pathname } = useLocation();
  return (
      <div className='relative'>
          <div className='relative h-[400px]'>
          
              <div className='absolute w-full h-full bg-black/40'>
                  <div className='z-20 px-14'>
                      <div className='mt-64 md:mt-56'>
                          {
                            pathname.includes("aboutus") && (
                                  <p className='text-2xl md:text-5xl font-[700] text-white'>About Us</p>
                            )
                          }
                          {
                            pathname.includes("contact") && (
                                  <p className='text-2xl md:text-5xl font-[700] text-white'>Contact Us</p>
                            )
                          }
                          {
                            pathname.includes("packages") && (
                                  <p className='text-2xl md:text-5xl font-[700] text-white'>Packages</p>
                            )
                          }
                      </div>
                  </div>
              </div>
              <img src={pic} alt="bg" className='h-[400px] w-full object-cover ' />
          </div>
          
      </div>
  )
}

export default AboutHero