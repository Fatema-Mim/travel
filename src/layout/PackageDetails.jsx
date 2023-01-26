import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DayPackage from '../component/details/DayPackage'
import DetailsHero from '../component/details/DetailsHero'
import Exprience from '../component/details/Exprience'
import Gallery from '../component/details/Gallery'



const PackageDetails = () => {
  const {name} = useParams()
  // console.log(name)
  const [packages, setPackages] = useState([])
  
  useEffect(() => {
    fetch("Packages.json")
    .then(res => res.json())
    .then(data => setPackages(data))
  }, [])
  // console.log(packages.find(pack => pack.name == name))
  const detailsData = packages.find(pack => pack.name === name)
  return (
    <div>
      <DetailsHero  detailsData={detailsData}/>
      <Exprience detailsData={detailsData}/>
      <DayPackage detailsData={detailsData}/>
      <Gallery detailsData={detailsData}/>
    </div>
  )
}

export default PackageDetails