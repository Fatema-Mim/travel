import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import { data } from "../data";

function Destinationa() {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch("Destination.json")
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    // console.log(destinations)
    return (
        <div className='px-6 md:px-16 py-12'>
            <div className='text-center py-8 md:py-12'>
                <p className='text-gray-600 text-[14px] uppercase tracking-widest '>Our proposal</p>
                <p className='text-gray-700/90 text-header capitalize font-bold'>our Destinations</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8'>

                {
                    destinations.map((data) => {
                        return (
                            <div key={data.id}>
                                <div className='relative h-[450px] '>

                                    <div className='absolute w-full h-full bg-gray-50/50'>
                                        <div className='mt-40 space-y-8'>
                                            <div>
                                                <p className='text-5xl text-center font-semibold text-slate-700'>{data.continent}</p>
                                            </div>
                                            <div className='text-center  space-y-2 '>
                                                {data.countries.map((country) => {
                                                    return(
                                                        <p key={country.id} className='text-2xl font-semibold text-gray-600 hover:text-slate-700'><Link to={`${country.name}`} >{country.name}</Link></p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <img src={data.bgImg} alt="bg" className='h-[450px] w-full object-cover rounded-sm' />
                                </div>


                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Destinationa