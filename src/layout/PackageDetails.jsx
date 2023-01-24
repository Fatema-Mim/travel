import React from 'react'
import DayPackage from '../component/details/DayPackage'
import DetailsHero from '../component/details/DetailsHero'
import Exprience from '../component/details/Exprience'
import Gallery from '../component/details/Gallery'

const PackageDetails = () => {
  return (
    <div>
      <DetailsHero/>
      <Exprience/>
      <DayPackage/>
      <Gallery/>
    </div>
  )
}

export default PackageDetails