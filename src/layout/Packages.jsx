import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PackageCard from '../component/card/PackageCard'
import AboutHero from '../component/aboutUs/AboutHero'



function Packages() {
  const [packages, setPackages] = useState([])
  useEffect(() => {
      fetch("Packages.json")
          .then(res => res.json())
          .then(data => setPackages(data))
  }, [])
  // console.log(packages)
  return (
    <>
    <AboutHero/>
    <div className='px-10 md:px-14 py-16 md:py-20 space-y-8'>
      <div className='text-center py-6'>
        <p className='text-gray-600 text-[14px] uppercase tracking-widest '>Our proposal</p>
        <p className='text-gray-700/90 text-header capitalize font-bold'>our Packages</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-8'>
        {
          packages.map((pack) => {
            return(
              
              <PackageCard key={pack.id} pack={pack}/>
            )
          }  )
        }     
      </div>
    </div>
    </>
  )
}

export default Packages