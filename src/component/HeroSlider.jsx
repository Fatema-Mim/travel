import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiDrink } from 'react-icons/bi';
import { FaTheaterMasks } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { RxCamera } from 'react-icons/rx';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';

import hero from '../img/hero.jpg';
import hero2 from '../img/hero2.jpg';
import hero3 from '../img/hero3.jpg';

const sliders = [
    {
        bg:hero,
    },
    {
        bg:hero2,
    },
    {
        bg:hero3,
    },
   
]

function HeroSlider() {
  return (
    <Swiper 
    modules={[EffectFade ,Autoplay]}
    effect={'fade'}
    loop={true}
    autoplay={{ 
        delay:1000,
        disableOnInteraction:false
     }}
    className='h-[1200px] md:h-[800px] lg:h-[820px] w-full'>
        {sliders.map((slider,index)=>{
            const {bg} = slider ;
            return (
            <SwiperSlide className='h-full bg-pink-400 relative flex justify-between items-center' key={index}>
                <div className='z-20 text-center mx-auto'>
                    <p className="text-white text-5xl md:text-6xl font-extrabold md:font-black">Search Your Next <span className='underline decoration-[8px] underline-offset-1 decoration-purple-500'>Holiday</span> </p>
                    <p className="text-white text-3xl md:text-4xl font-thin tracking-widest	my-8">Check out best promotions</p>
                    <div className='flex bg-white px-4 py-2 w-[300px] md:w-[400px] rounded-full mx-auto my-16'>
                        <input type="text" placeholder='Choose your Destintion ...' className='w-full placeholder:text-gray-500 focus:outline-none'/>
                        <AiOutlineSearch size={25} clsssName="fill-gray-300"/> 
                    </div>
                    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-6 justify-center items-center'>
                        <div className='bg-black/40 py-6 px-11 text-white rounded-sm'>
                            <BiDrink size={30} className="inline-block"/>
                            <p className='tricker-widest text-[12px] uppercase tracking-[.3rem]'>Relax</p>
                        </div>
                        <div className='bg-black/40 py-6 px-6 text-white rounded-sm'>
                            <FaTheaterMasks size={30} className="inline-block"/>
                            <p className='tricker-widest text-[12px] uppercase tracking-[.3rem]'>Cultural</p>
                        </div>
                        <div className='bg-black/40 py-6 px-11 text-white rounded-sm'>
                            <HiOutlineHome size={30} className="inline-block"/>
                            <p className='tricker-widest text-[12px] uppercase tracking-[.3rem]'>Sport</p>
                        </div>
                        <div className='bg-black/40 py-6 px-8 text-white rounded-sm'>
                            <RxCamera size={30} className="inline-block"/>
                            <p className='tricker-widest text-[12px] uppercase tracking-[.3rem]'>history</p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-0 w-full h-full'>
                    <img className='object-cover h-full w-full' src={bg} alt="" />
                </div>
                <div className='absolute w-full h-full bg-black/70'></div>
            </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default HeroSlider