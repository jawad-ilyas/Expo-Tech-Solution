import React from 'react'
import OurServices from './OurServices'
import Card from './Card';
import ExpertiseIcon from '../assets/expertise.png';
import CustomizationIcon from '../assets/customization.png';
import CollaborationIcon from '../assets/collaboration.png';
import PricingIcon from '../assets/competitive.png';
import CardWithNoBg from './CardWithNoBg';

function WhyUsSection() {
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
        <div className='no | mx-4 | ms-6'>
            <div className='xl:w-11/12 mx-auto 2xl:w-8/12'>

                <div className='no | flex flex-col justify-between items-start '>
                    <div className='2xl:w-5/12 xl:w-5/12 no | w-full'>
                        <OurServices title={"Why Us"} description={"We are experts in providing high-quality mobile development, web development, UI/UX design, and digital marketing services to organizations of every description. reasons why you ought to collaborate with us"} />
                    </div>
                    <div className='2xl:w-7/12 xl:w-7/12 lg:ms-24 no | w-full'>
                        <div className='no | grid grid-cols-1 gap-x-0 gap-y-5'>
                            {servicesData.map((card, index) => (
                                <div key={index} data-aos={card.animation} className='flex'>
                                    <CardWithNoBg title={card.title} description={card.description} image={card.image} hoverOrNot={false} imageBg={true} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default WhyUsSection    