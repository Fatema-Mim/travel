import React from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from "../img/client/client1.jpg";
import client2 from "../img/client/client2.jpeg";
import client3 from "../img/client/client3.jpeg";

const sliders = [
    {
        img:client1,
        text:"I’m very satisfied. They are high-quality and worth the money. The also offered packages at that minimum price so that’s a plus! Thanks to its scheduling feature, we don’t need staff to work outside of business hours.",
        name:"Jhon Doe",
        work:"Founder, Jhon Group"
    },
    {
        img:client2,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Fatema",
        work:"Senior Officer, Jamuna Group"
    },
    {
        img:client3,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Farhana",
        work:"Founder, Farhana ORC"
    },
    

]

const Clientsay = () => {
    return (
        <Swiper pagination={true}
            modules={[EffectFade, Autoplay, Pagination]}
            effect={'fade'}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }} className="mt-16">
            {sliders.map((slider, index) => {
                const { img,text,name,work } = slider;
                return (
                    <SwiperSlide className=' h-[500px] md:h-[400px] bg-blue-100 flex justify-between ' key={index}>
                        <div className=' w-full h-full text-center pt-14'>
                            <img src={img} alt={name} className="h-36 w-36 rounded-full inline-block object-cover" />
                            <p className='py-4 px-4  md:px-48' >{text}</p>
                            <p className='font-semibold'>{name}</p>
                            <p className='font-semibold'>{work}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Clientsay