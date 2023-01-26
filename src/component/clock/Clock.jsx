import React from 'react'

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <>
            <div className='tracking-widest'>
                <p className='text-[28px] font-bold'>{timerDays}</p>
                <p className='uppercase'>Days</p>
            </div>
            <div className='tracking-widest'>
                <p className='text-[28px] font-bold'>{timerHours}</p>
                <p className='uppercase'>Hours</p>
            </div>
            <div className='tracking-widest'>
                <p className='text-[28px] font-bold'>{timerMinutes}</p>
                <p className='uppercase'>Minutes</p>
            </div>
            <div className='tracking-widest'>
                <p className='text-[28px] font-bold'>{timerSeconds}</p>
                <p className='uppercase'>Seconds</p>
            </div>
        </>
    )
}

export default Clock