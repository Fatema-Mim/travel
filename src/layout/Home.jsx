import React from 'react'
import Beache from '../component/Beache'
import ClientSay from '../component/ClientSay'
import Destinationa from '../component/Destinationa'
import HeroSlider from '../component/HeroSlider'
import NextHoliday from '../component/NextHoliday'
import Package from '../component/Package'
import Subscribe from '../component/Subscribe'
import WeDo from '../component/WeDo'

function Home() {
  return (
    <div>
        <HeroSlider/>
        <Destinationa/>
        <NextHoliday/>
        <Beache/>
        <Package/>
        <WeDo/>
        <ClientSay/>
        <Subscribe/>
    </div>
  )
}

export default Home