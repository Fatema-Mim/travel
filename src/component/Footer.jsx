import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { MdSmartphone } from 'react-icons/md'
import footer from "../img/footer-map-img.png"

const Footer = () => {
  return (
    <>
    <div  className='px-10 py-10 text-center text-gray-700'>
        <div className='grid md:grid-cols-3 gap-8'>
            <div>
                <p className='text-sm uppercase font-semibold pb-10'>We Are From</p>
                <img src={footer} alt="location"  className='object-center'/>
            </div>
            <div>
                  <p className='text-sm uppercase font-semibold pb-10'>Follow us</p>
                <div className='grid grid-cols-3 gap-6'>
                    <div>
                          <FaFacebookSquare size={30} className="inline-block"/>
                          <p>Facebook</p>
                    </div>
                    <div>
                          <FaInstagramSquare size={30} className="inline-block"/>
                          <p>Instagram</p>
                    </div>
                    <div>
                          <FaTwitterSquare size={30} className="inline-block"/>
                          <p>Twitter</p>
                    </div>
                    <div>
                          <FaYoutubeSquare size={30} className="inline-block"/>
                          <p>YouTube</p>
                    </div>
                    <div>
                          <FaPinterestSquare size={30} className="inline-block"/>
                          <p>Pinterest</p>
                    </div>
                </div>
            </div>
            <div>
                  <p className='text-sm uppercase font-semibold pb-10'>Contact us</p>
                <div className='flex justify-center'>
                    <div>
                          <div className='flex space-x-2'>
                              <MdSmartphone size={20} />
                              <p>+099293884-9</p>
                          </div>
                          <div className='flex space-x-2'>
                              <GrMail size={20} />
                              <p>travlerInfo@gamil.com</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='bg-gray-700 text-center text-white text-sm font-semibold py-4 uppercase '>
        <p>all right to 2023</p>
    </div>
    </>
  )
}

export default Footer