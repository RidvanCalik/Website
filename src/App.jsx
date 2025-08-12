import { useState, useEffect } from 'react'
import Section1 from './components/mainpage/section1';
import Section2 from './components/mainpage/section2';
import Section3 from './components/mainpage/section3';
import TypeIt from "typeit-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';


import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const [count, setCount] = useState(0)


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
    <>

      <Section1></Section1>


      <Section2></Section2>


      <Section3></Section3>


    </>
  )
}

export default App
