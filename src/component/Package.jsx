import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PackageCard from './card/PackageCard'


function Package() {
  const [packages, setPackages] = useState([])
  useEffect(() => {
      fetch("Packages.json")
          .then(res => res.json())
          .then(data => setPackages(data))
  }, [])
  // console.log(packages)
  return (
    <div className='px-6 md:px-16 py-12'>
      <div className='text-center py-8 md:py-12'>
        <p className='text-gray-600 text-[14px] uppercase tracking-widest '>Our proposal</p>
        <p className='text-gray-700/90 text-header capitalize font-bold'>our Packages</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-8'>
        {
          packages.map((pack) => {
            return(
              
              <PackageCard key={pack.id} pack={pack}/>
            )
          }).slice(0,3)
        }     
      </div>
    </div>
  )
}

export default Package