import React, { useEffect, useState } from 'react'
import hero from '../img/hero2.jpg'
import Clock from './clock/Clock'

function Beache() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    let interval;

    const startTimer = () => {
        const countDownDate = new Date("May 30,2023 ").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });



    return (
        <div className='px-6 md:px-16 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 gap-0 md:gap-8'>
                <div className='space-y-6 text-center md:text-left'>
                    <div>
                        <p className='text-gray-600 text-[14px] uppercase tracking-widest'>Noth America</p>
                        <p className=' text-4xl md:text-header text-gray-700/90 font-bold capitalize'>The Best Beaches</p>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum veritatis non quisquam dignissimos rerum possimus facere quidem aliquam omnis provident.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum veritatis non quisquam dignissimos rerum possimus facere quidem aliquam omnis provident.</p>
                    <p><span className='text-[28px]'>500$</span> / persone</p>
                    <button className='bg-[#1bbc9b] text-[14px] text-white uppercase tracking-widest px-6 py-1.5 rounded-full'>Book Now</button>
                </div>
                <div className='col-span-2 md:relative'>
                    <img src={hero} alt="" className='w-full h-[200px] md:h-full object-cover' />
                    <div className=' md:absolute w-full md:w-3/4  bg-[#14b9d5] text-white flex justify-between text-center -bottom-14  p-4 md:p-8 md:space-x-3'>
                        <Clock
                            timerDays={timerDays}
                            timerHours={timerHours}
                            timerMinutes={timerMinutes}
                            timerSeconds={timerSeconds}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beache