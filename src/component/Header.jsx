import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function Header() {
    const [header,setHeader] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            window.scrollY > 50 ? setHeader(true) : setHeader(false)
        })
    },[])
  return (
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500 text-white`}>
        <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 px-0 lg:px-14'>
            {/* logo */}
            <p>
                  {header ? (<span className='text-4xl font-bold text-black'>Travel.</span>) : (<span className='text-4xl font-bold text-white'>Travel</span> )}
            </p>
            {/* nav */}
            <nav>
                <ul className={`${header ? 'text-black' : 'text-white'} flex gap-x-4 lg:gap-x-8`}>
                    <li className="hover:text-pink-400 transition">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="hover:text-pink-400 transition">
                        <Link to="/packageDetails">Package</Link>
                    </li>
                    <li className="hover:text-pink-400 transition">
                        <Link to="/aboutus">AboutUs</Link>
                    </li>
                    <li className="hover:text-pink-400 transition">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                
            </nav>
        </div>
    </header>
  )
}

export default Header