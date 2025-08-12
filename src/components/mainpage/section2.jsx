import { useState, useEffect } from 'react'
import TypeIt from "typeit-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Section2() {
    let knowledge = ["Azure Devops", "ASP.Net", "SQL", "Excel", "World", "IT", "Promethus", "Grafana", "Git", "CI/CD", "React.JS", "Flutter", "HTML", "CSS", "JavasScript", "Windows", "Linux", "MSSQL", "Network", "Nginx", "Monitoring", "Node.js"]



    useEffect(() => {

        let body = document.querySelector('body');
        let profileImgElement = document.querySelector('.profileImg');

        const paralaxScroll = function () {
            let scrollY = snapScrollElement.scrollTop;
            profileImgElement.style.transform = 'translateX(' + (scrollY * 0.2) + 'px)';
            body.style.backgroundPositionY = -(scrollY * 0.1) + 'px';

        };

        let snapScrollElement = document.querySelector('body');
        snapScrollElement.addEventListener('scroll', paralaxScroll);
        return () => {
            window.removeEventListener('scroll', paralaxScroll);

        };
    }, []);
    return (
        <section id='section2'>
            <div id='descriptionArea'><TypeIt options={{

                speed: 2,
                waitUntilVisible: true,
            }}>Merhaba, Teknolojiye ve öğrenmeye tutkulu, çözüm odaklı biriyim. Yazılım geliştirme, problem çözme ve yeni teknolojiler öğrenme konusunda yetenekliyim. Sürekli kendimi geliştirmek için çaba harcıyorum ve takım çalışmasına önem veriyorum.</TypeIt>
            </div>


            <div>


                <Swiper

                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    loop={true}
                    freeMode={true}
                    speed={6000} // yavaş ve kesintisiz akış için uzun süre
                    autoplay={{
                        delay: 0.9,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    allowTouchMove={false}

                >
                    {knowledge.map((e) => <SwiperSlide className='chip' >{e}</SwiperSlide>)}

                </Swiper>

                <Swiper

                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    loop={false}
                    freeMode={true}
                    speed={6000} // yavaş ve kesintisiz akış için uzun süre
                    autoplay={{
                        delay: 0.9,
                        disableOnInteraction: false,
                        reverseDirection: false
                    }}
                    allowTouchMove={false}

                >
                    {knowledge.sort().map((e) => <SwiperSlide className='chip' >{e}</SwiperSlide>)}

                </Swiper>

                <Swiper

                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    loop={true}
                    freeMode={true}
                    speed={6000} // yavaş ve kesintisiz akış için uzun süre
                    autoplay={{
                        delay: 0.9,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    allowTouchMove={false}

                >
                    {knowledge.reverse().map((e) => <SwiperSlide className='chip' >{e}</SwiperSlide>)}

                </Swiper>
                <Swiper

                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    loop={true}
                    freeMode={true}
                    speed={6000} // yavaş ve kesintisiz akış için uzun süre
                    autoplay={{
                        delay: 0.9,
                        disableOnInteraction: false,
                        reverseDirection: false
                    }}
                    allowTouchMove={false}

                >
                    {knowledge.sort().reverse().map((e) => <SwiperSlide className='chip' >{e}</SwiperSlide>)}

                </Swiper>



            </div>
        </section >


    )
}
export default Section2;