import React from 'react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import icon from "../img/wedo/icon-around.png";

const sliders = [
    {
        img:icon,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Fatema bin ibnu",
        work:"Founder, Fatima ORC"
    },
    {
        img:icon,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Fatema bin ibnu",
        work:"Founder, Fatima ORC"
    },
    {
        img:icon,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsa voluptates et quae, inventore quaerat, aspernatur in dolore eos sit repellat, laboriosam laborum? Officiis voluptatum iusto modi eveniet aliquid voluptate!",
        name:"Fatema bin ibnu",
        work:"Founder, Fatima ORC"
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
                    <SwiperSlide className=' h-[300px] bg-blue-100 flex justify-between ' key={index}>
                        <div className=' w-full h-full text-center pt-14'>
                            <img src={img} alt={name} className="inline-block object-center" />
                            <p className='py-3 px-48' >{text}</p>
                            <p>{name}</p>
                            <p>{work}</p>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Clientsay