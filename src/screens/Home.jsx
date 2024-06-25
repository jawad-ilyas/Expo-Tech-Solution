import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import AchievementsSection from '../components/AchievementsSection.jsx';
import OurServices from '../components/OurServices.jsx';
import Card from '../components/Card.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Accordian from '../components/Accordian.jsx';
import Practice from '../components/Practice.jsx';
import WhyUsSection from '../components/WhyUsSection.jsx';
import OurServicesSection from '../components/OurServicesSection.jsx';
import AccordianSection from '../components/AccordianSection.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import { FaQ } from 'react-icons/fa6';
import FaqSection from '../components/FaqSection.jsx';
import JoinOurTeamSection from '../components/JoinOurTeamSection.jsx';
import Footer from '../components/Footer.jsx';
import EmptySection from '../components/EmptySection.jsx';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 100
        });
    }, []);



    return (
        <div className= 'bg-lightBg   dark:bg-dark'>
            {/* <Header /> */}
            <EmptySection />
            <HeroSection />
            <AchievementsSection />
             <OurServicesSection />
            <AccordianSection />

           <WhyUsSection />
             <TestimonialSection />
            <FaqSection />
           
          
        </div>
    );
}

export default Home;
