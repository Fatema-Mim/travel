import React from 'react'
import { GoLocation } from 'react-icons/go'
import b1 from '../../img/best/b1.jpeg'
import b2 from '../../img/best/b2.jpeg'
import b3 from '../../img/best/b3.jpeg'

const Exprience = ({detailsData}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 px-8 py-16'>
        <div className='col-span-2 space-y-4'>
            <h2 className='text-3xl font-bold text-slate-600' >Amazing Experience</h2>
            <p className='text-slate-800 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis illum non voluptatum saepe aliquid provident deleniti obcaecati ipsam consequuntur adipisci excepturi quia omnis tempora, magni, totam consectetur ipsum porro neque quasi eos beatae! A sunt quibusdam, modi vitae nihil sed? Minus repellat doloribus expedita velit, ea ab, officia obcaecati, pariatur dolor at sint eligendi iure vel! Provident, fugiat? Assumenda sint fuga fugit sapiente sunt vero ratione dignissimos facere labore magni aliquid ex, nobis nihil dolorem ullam. Quod, aspernatur culpa.</p>
            <p className='text-slate-800 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis illum non voluptatum saepe aliquid provident deleniti obcaecati ipsam consequuntur adipisci excepturi quia omnis tempora, magni, totam consectetur ipsum porro neque quasi eos beatae! A sunt quibusdam, modi vitae nihil sed? Minus repellat doloribus expedita velit, ea ab, officia obcaecati, pariatur dolor at sint eligendi iure vel! Provident, fugiat? Assumenda sint fuga fugit sapiente sunt vero ratione dignissimos facere labore magni aliquid ex, nobis nihil dolorem ullam. Quod, aspernatur culpa.</p>
            <div className='pt-6'>
                <div className='flex justify-between py-6 border-b-2 space-x-4 md:space-x-0'>
                      <p className='text-slate-800 font-semibold'>Entrance to the museums</p>
                      <p className='text-gray-500'>50% discount on all admissions</p>
                </div>
                <div className='flex justify-between py-6 border-b-2 space-x-4 md:space-x-0'>
                      <p className='text-slate-800 font-semibold'>Travel with children and pets</p>
                      <p className='text-gray-500'>Possibility to rent the stroller</p>
                </div>
                <div className='flex justify-between py-6 border-b-2 space-x-4 md:space-x-0'>
                      <p className='text-slate-800 font-semibold'>Travel by bus, car and minivan</p>
                      <p className='text-gray-500'>Air conditioning guaranteed</p>
                </div>
                <div className='flex justify-between py-6 border-b-2 space-x-6 md:space-x-0'>
                      <p className='text-slate-800 font-semibold'>Package specifications</p>
                      <p className='text-gray-500'>Breakfast and dinner included & Health care included</p>
                </div>
                <div className='flex justify-between py-6 border-b-2 space-x-5 md:space-x-0'>
                      <p className='text-slate-800 font-semibold'>Services NOT included</p>
                      <p className='text-gray-500'> Lunch not included in the package & Baggage protection insurance</p>
                </div>
            </div>
        </div>
        <div>
           <img src={detailsData?.pic1} alt="travel" className='w-full h-[300px] md:h-[280px] object-cover pt-3' />
           <div className='text-center'>
                <p className='text-2xl font-bold text-slate-600 py-6'>Best Packages</p>
                <div className='space-y-4 '>
                    <div className='flex space-x-4'>
                        <img src={b1} alt="travel" className='h-28 w-28 object-cover'/>
                        <div className='text-slate-500 space-y-2'>
                            <p className='text-3xl'>Singapur</p>
                              <p className='flex space-x-2'><GoLocation size={16} className='self-center' /> <span className='self-center'>Asia</span></p>
                            <button className='bg-yellow-400 px-6 py-1.5 text-white rounded-full font-semibold'>From 200$</button>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <img src={b2} alt="travel" className='h-28 w-28 object-cover'/>
                        <div className='text-slate-500 space-y-2'>
                            <p className='text-3xl'>Singapur</p>
                            <p className='flex space-x-2'><GoLocation size={16} className='self-center' /> <span className='self-center'>Asia</span></p>
                            <button className='bg-yellow-400 px-6 py-1.5 text-white rounded-full font-semibold'>From 400$</button>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <img src={b3} alt="travel" className='h-28 w-28 object-cover'/>
                        <div className='text-slate-500 space-y-2'>
                            <p className='text-3xl'>Singapure</p>
                              <p className='flex space-x-2'><GoLocation size={16} className='self-center' /> <span className='self-center'>Asia</span></p>
                            <button className='bg-yellow-400 px-6 py-1.5 text-white rounded-full font-semibold'>From 700$</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Exprience