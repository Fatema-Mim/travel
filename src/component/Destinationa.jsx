import React from 'react';
import { Link } from "react-router-dom";
import { data } from "../data";

function Destinationa() {
  return (
    <div className='container mx-auto p-16 space-y-8'>
        <div className='text-center'>
            <p className='text-gray-600 text-[14px] uppercase tracking-widest '>Our proposal</p>
            <p className='text-gray-700/90 text-header capitalize font-bold'>our Destinations</p>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
            {
                data.map((data)=>{
                    return(
                        <div className='relative group' key={data.id}>
                            <div className='bg-red-400 h-[400px] w-[360px] relative'>
                                <div className='absolute w-full h-full bg-black/20'>
                                    <div className='p-4 '>
                                        <p>o</p>
                                        <div className='mt-64'>
                                            <p className='text-lg text-white font-bold '>{data.continent}</p>
                                            <p className='text-[13px] text-white tracking-widest uppercase'>3 <span>Packages</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[400px] w-[360px] bg-[#14b9d5] absolute top-0 transition-transform duration-500  justify-center items-center hidden group-hover:flex'>
                                <div className='text-center space-y-6'>
                                    <p className='text-white text-[22px] font-bold'>Packages</p>
                                    <div className='flex flex-col space-y-2 text-white text-[14px] tracking-wide pb-6'>
                                        {
                                            data.country.map((country) =>{
                                                return(
                                                    <Link to={`/packageDetails/${country.id}`}>{country.name}</Link>
                                                )
                                            })
                                        }
                                    </div>
                                    <Link to="" className='bg-white text-[16px] text-[#14b9d5] px-4 py-1 rounded-full'>
                                        <button className='uppercase tracking-widest'>
                                            view destination
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
              {/* <div className='relative group'>
                  <div className='bg-red-400 h-[400px] w-[360px] relative'>
                      <div className='absolute w-full h-full bg-black/20'>
                          <div className='p-4 '>
                              <p>o</p>
                              <div className='mt-64'>
                                  <p className='text-lg text-white font-bold '>Europe</p>
                                  <p className='text-[13px] text-white tracking-widest uppercase'>3 <span>Packages</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='h-[400px] w-[360px] bg-[#14b9d5] absolute top-0 transition-transform duration-500  justify-center items-center hidden group-hover:flex'>
                        <div className='text-center space-y-6'>
                            <p className='text-white text-[22px] font-bold'>Packages</p>
                            <div className='flex flex-col space-y-2 text-white text-[14px] tracking-wide pb-6'>
                                <Link to="">Berlin</Link>
                                <Link to="">Berlin</Link>
                                <Link to="">Norway</Link>
                            </div>  
                          <Link to="" className='bg-white text-[16px] text-[#14b9d5] px-4 py-1 rounded-full'>
                                <button className='uppercase tracking-widest'>
                                  view destination
                                </button>
                            </Link>
                            
                        </div>
                  </div>
              </div> */}
              {/* <div className='relative group'>
                  <div className='bg-red-400 h-[400px] w-[360px] relative'>
                      <div className='absolute w-full h-full bg-black/20'>
                          <div className='p-4 '>
                              <p>o</p>
                              <div className='mt-64'>
                                  <p className='text-lg text-white font-bold '>Europe</p>
                                  <p className='text-[13px] text-white tracking-widest uppercase'>3 <span>Packages</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='h-[400px] w-[360px] bg-[#14b9d5] absolute top-0 transition duration-500  justify-center items-center hidden group-hover:flex'>
                        <div className='text-center space-y-6'>
                            <p className='text-white text-[22px] font-bold'>Packages</p>
                            <div className='flex flex-col space-y-2 text-white text-[14px] tracking-wide pb-6'>
                                <Link to="">Berlin</Link>
                                <Link to="">Berlin</Link>
                                <Link to="">Norway</Link>
                            </div>  
                          <Link to="" className='bg-white text-[16px] text-[#14b9d5] px-4 py-1 rounded-full'>
                                <button className='uppercase tracking-widest'>
                                  view destination
                                </button>
                            </Link>
                            
                        </div>
                  </div>
              </div>
              <div className='relative group'>
                  <div className='bg-red-400 h-[400px] w-[360px] relative'>
                      <div className='absolute w-full h-full bg-black/20'>
                          <div className='p-4 '>
                              <p>o</p>
                              <div className='mt-64'>
                                  <p className='text-lg text-white font-bold '>Europe</p>
                                  <p className='text-[13px] text-white tracking-widest uppercase'>3 <span>Packages</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='h-[400px] w-[360px] bg-[#14b9d5] absolute top-0 transition duration-500  justify-center items-center hidden group-hover:flex'>
                        <div className='text-center space-y-6'>
                            <p className='text-white text-[22px] font-bold'>Packages</p>
                            <div className='flex flex-col space-y-2 text-white text-[14px] tracking-wide pb-6'>
                                <Link to="">Berlin</Link>
                                <Link to="">Berlin</Link>
                                <Link to="">Norway</Link>
                            </div>  
                          <Link to="" className='bg-white text-[16px] text-[#14b9d5] px-4 py-1 rounded-full'>
                                <button className='uppercase tracking-widest'>
                                  view destination
                                </button>
                            </Link>
                            
                        </div>
                  </div>
              </div> */}
              
        </div>
    </div>
  )
}

export default Destinationa