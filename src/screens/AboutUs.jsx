import React, { useEffect } from 'react'
import BreadCome from '../components/BreadCome'
import CallToAction from '../components/CallToAction'
import SingleHeading from '../components/SingleHeading'
import Phase from '../components/Phase'
import SimpleArrow from '../assets/aboutus/SimpleArrow'
import Phase1lightMod from "../assets/aboutus/light_01.png"
import Phase1DarkMode from "../assets/aboutus/dark_01.png"
import Phase2lightMod from "../assets/aboutus/light_02.png"
import Phase2DarkMode from "../assets/aboutus/dark_02.png"
import Phase3lightMod from "../assets/aboutus/light_03.png"
import Phase3DarkMode from "../assets/aboutus/dark_03.png"
import CurlyArrow from '../assets/aboutus/CurlyArrow'
import FlipCard from '../components/FlipCard'


// front end 
import supportImageFront from "../assets/aboutus/support.png"
import supportImageBack from "../assets/aboutus/support-alt.png"
import timeImageFront from "../assets/aboutus/time.png"
import timeImageBack from "../assets/aboutus/time-alt.png"
import innovativeImageFront from "../assets/aboutus/innovative.png"
import innovativeImageBack from "../assets/aboutus/innovative-alt.png"


import AOS from 'aos'
import 'aos/dist/aos.css';

function AboutUs() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 200
    });
  })
  return (
    <div className='bg-light dark:bg-dark'>
      <BreadCome />
      <CallToAction heading={"Empowering Digital Solutions"} descritpion={"At Code Flamme, We empower businesses with innovative and tailored digital solutions for success in the ever-evolving digital landscape."} />
      <SingleHeading heading={"How we Operate?"} />
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} left={true} phaseNumber={"Phase 01"} lightModeimage={Phase1lightMod} DarkModeImage={Phase1DarkMode} fading="fade-right" fadeOnImage="fade-left" />
      <div className='relative pb-40' id='sampleArrow'>
        <div className='absolute xl:top-[calc(-142px)] xl:left-[calc(290px)]  2xl:top-[calc(-142px)] 2xl:left-[calc(610px)]'>
          <SimpleArrow />
        </div>

      </div>
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} phaseNumber={"Phase 02"} lightModeimage={Phase2lightMod} DarkModeImage={Phase2DarkMode} fading="fade-left" fadeOnImage="fade-right" />
      <div className='relative pb-40' id='sampleArrow'>
        <div className='absolute xl:top-[calc(-92px)] xl:left-[calc(390px)]  2xl:top-[calc(-142px)] 2xl:left-[calc(610px)]'>
          <CurlyArrow />
        </div>

      </div>
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} left={true} phaseNumber={"Phase 03"} lightModeimage={Phase3lightMod} DarkModeImage={Phase3DarkMode} fading="fade-right" fadeOnImage="fade-left" />
      <div className='relative pb-40' id='sampleArrow'>
        <div className='absolute xl:top-[calc(-142px)] xl:left-[calc(290px)]  2xl:top-[calc(-142px)] 2xl:left-[calc(610px)]'>
          <SimpleArrow />
        </div>

      </div>
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} phaseNumber={"Phase 04"} lightModeimage={Phase2lightMod} DarkModeImage={Phase2DarkMode} fading="fade-left" fadeOnImage="fade-right" />
      <SingleHeading heading={"Experience the Advantages of Collaborating with Our Team"} />

      <div className=' container grid grid-cols-3 gap-10 pb-20'>
        <FlipCard frontTitle={"Continuous Support"} frontDescription={"Our commitment doesn’t end when the project is completed. We provide ongoing support and maintenance to ensure that your solutions remain updated, secure, and optimized for peak performance. Whether it’s technical assistance, updates, or troubleshooting, we're here to support your business journey every step of the way."} frontImage={supportImageFront} backImage={supportImageBack} hoverColor={"primary"} />
        <FlipCard frontTitle={"Timely Delivery"} frontDescription={"We understand the value of time in today's fast-paced business environment. With a commitment to punctuality, we ensure that your projects are completed within the agreed-upon timelines. Our efficient project management practices and streamlined workflows enable us to deliver high-quality results without compromising on deadlines.."} frontImage={timeImageFront} backImage={timeImageBack} hoverColor={"primary"} />
        <FlipCard frontTitle={"Continuous Support"} frontDescription={"When working with us, you gain access to our team of highly skilled and creative professionals who are committed to delivering innovative solutions. We continuously explore the latest technologies and industry trends, ensuring that your projects are powered by cutting-edge advancements that set you apart from competitors."} frontImage={innovativeImageFront} backImage={innovativeImageBack} hoverColor={"primary"} />
      </div>
    </div>
  )
}

export default AboutUs