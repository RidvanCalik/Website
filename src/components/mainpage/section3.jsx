import { useState, useEffect } from 'react'
import TypeIt from "typeit-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Mousewheel } from 'swiper/modules';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Section3() {



    return (
        <section id='section3'>
            <h1>Blog</h1>
            <Swiper
                modules={[Mousewheel]}
                loop={true}
                spaceBetween={10}
                slidesPerView={2.5}
                mousewheel={{
                    forceToAxis: true,
                    thresholdDelta: 30
                }}


            >
                <SwiperSlide className='card'><a target='_blank' href='https://www.google.com'><img src="/img/blog.jpg" alt="" /><div className='cardBody'><h3>En iyi Korku Filmleri</h3><p>Şahsıma Münasır Korku filmleri</p></div></a></SwiperSlide>
                <SwiperSlide className='card'><a target='_blank' href='https://www.google.com'><img src="/img/blog2.jpg" alt="" /><div className='cardBody'><h3>Gökçeada Tatil</h3><p>Türkiyenin en büyük adası olma özelliğini taşıyor</p></div></a></SwiperSlide>
                <SwiperSlide className='card'><a target='_blank' href='https://www.google.com'><img src="/img/blog3.jpg" alt="" /><div className='cardBody'><h3>Fotoğraf Köşesi</h3><p>Amatör fotoğraflarım</p></div></a></SwiperSlide>
                <SwiperSlide className='card'><a target='_blank' href='https://www.google.com'><img src="/img/blog3.jpg" alt="" /><div className='cardBody'><h3>Fotoğraf Köşesi</h3><p>Amatör fotoğraflarım</p></div></a></SwiperSlide>
                <SwiperSlide className='card'><a target='_blank' href='https://www.google.com'><img src="/img/blog3.jpg" alt="" /><div className='cardBody'><h3>Fotoğraf Köşesi</h3><p>Amatör fotoğraflarım</p></div></a></SwiperSlide>
                <SwiperSlide className='card'><a target='_blank' href='https://www.google.com'><img src="/img/blog3.jpg" alt="" /><div className='cardBody'><h3>Fotoğraf Köşesi</h3><p>Amatör fotoğraflarım</p></div></a></SwiperSlide>
            </Swiper>
        </section>

    )
}
export default Section3;