import React from 'react';
import { useParams } from 'react-router-dom';
// import { AiOutlineClockCircle } from 'react-icons/ai'
// import { GoLocation } from 'react-icons/go'
// import pic from "../../img/hero4.jpg"
import { data } from "../../data";


const DetailsHero = () => {
  const {id} = useParams()
  return (
      <div>
          {
            `data.country.${id}`.map((country)=>{
              return(
                console.log(country.name)
              )
            })
          }
      </div>
  )
}

export default DetailsHero