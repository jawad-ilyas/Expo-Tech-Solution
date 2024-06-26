import React from 'react'
import CardWithNoBg from './CardWithNoBg';
import OurServices from './OurServices';
import ExpertiseIcon from '../assets/expertise.png';
import CustomizationIcon from '../assets/customization.png';
import CollaborationIcon from '../assets/collaboration.png';
import PricingIcon from '../assets/competitive.png';
import SimpleAccordian from './SimpleAccordian';
import dynamicArrow from "../assets/download.svg"

function FaqSection() {
    const servicesData = [
        {
            image: ExpertiseIcon,
            title: 'Expertise',
            description: 'We have a proven record of providing high-quality services that fulfills all requirements of our clients.',
            animation: 'fade-down'
        },
        {
            image: CustomizationIcon,
            title: 'Customization',
            description: 'We collaborate together with our clients to understand their needs and provide customised solutions that suit their objectives.',
            animation: 'fade-down'
        },
        {
            image: CollaborationIcon,
            title: 'Collaboration',
            description: 'We believe in collaborating closely with our clients to provide solutions that meet and surpass their expectations.',
            animation: 'fade-up'
        },
        {
            image: PricingIcon,
            title: 'Competitive Pricing',
            description: 'Since we acknowledge that financial investment is an essential consideration for businesses, we provide competitive pricing for our services.',
            animation: 'fade-up'
        }
    ];
    return (
        <div className='pb-20 no | mx-4 | sm:mx-6 | md:mx-8 | xl:w-11/12 xl:mx-auto |  2xl:w-9/12 2xl:mx-auto' >
            <div className=' mx-auto '>
                <div className='no | flex flex-col justify-between items-start  | lg:flex-row'>
                    <div className='2xl:w-5/12 xl:w-5/12 | lg:w-5/12'>
                        <OurServices title={"Any questions? Check out the FAQ"} description={"Curious minds, meet clarity. Unearth answers in our comprehensive FAQ section, illuminating our services and processes."} center={false} />
                        <div className='lg:flex lg:items-center lg:justify-between sm:hidden hidden | md:flex md:items-center md:justify-center md:mb-4'>
                            <img src={dynamicArrow} />
                        </div>
                    </div>
                    <div className='2xl:w-7/12 xl:w-7/12 lg:ms-12 lg:w-7/12'>
                        <SimpleAccordian />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection