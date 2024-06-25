import React from 'react'
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
function AboutUs() {
  return (
    <div className='bg-light dark:bg-dark'>
      <BreadCome />
      <CallToAction heading={"Empowering Digital Solutions"} descritpion={"At Code Flamme, We empower businesses with innovative and tailored digital solutions for success in the ever-evolving digital landscape."} />
      <SingleHeading heading={"How we Operate?"} />
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} left={true} phaseNumber={"Phase 01"} lightModeimage={Phase1lightMod} DarkModeImage={Phase1DarkMode} />
      <div className='relative pb-40' id='sampleArrow'>
        <div className='absolute xl:top-[calc(-142px)] xl:left-[calc(290px)]  2xl:top-[calc(-142px)] 2xl:left-[calc(610px)]'>
          <SimpleArrow />
        </div>

      </div>
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} phaseNumber={"Phase 02"} lightModeimage={Phase2lightMod} DarkModeImage={Phase2DarkMode} />
      <div className='relative pb-40' id='sampleArrow'>
        <div className='absolute xl:top-[calc(-92px)] xl:left-[calc(390px)]  2xl:top-[calc(-142px)] 2xl:left-[calc(610px)]'>
          <CurlyArrow />
        </div>

      </div>
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} left={true} phaseNumber={"Phase 03"} lightModeimage={Phase3lightMod} DarkModeImage={Phase3DarkMode} />
      <div className='relative pb-40' id='sampleArrow'>
        <div className='absolute xl:top-[calc(-142px)] xl:left-[calc(290px)]  2xl:top-[calc(-142px)] 2xl:left-[calc(610px)]'>
          <SimpleArrow />
        </div>

      </div>
      <Phase title={"Discovery and Planning"} description={"In this initial phase, our team engages in comprehensive discovery sessions with you to understand your business, goals, and project requirements. We analyze your industry, target audience, and competition to gain valuable insights. Based on the gathered information, we develop a detailed project plan that outlines the scope, timelines, and resources needed for successful execution. This phase sets the foundation for a successful collaboration and ensures that we are aligned with your vision"} phaseNumber={"Phase 04"} lightModeimage={Phase2lightMod} DarkModeImage={Phase2DarkMode} />
      <SingleHeading heading={"Experience the Advantages of Collaborating with Our Team"} />
    </div>
  )
}

export default AboutUs