import React from 'react'
import Card from './Card'
import OurServices from './OurServices';

function OurServicesSection() {
    const cardData = [
        {
            title: "Custom Web Development",
            description: "We provide Custom Web Development services to help you create web-based applications that are fast, secure, and scalable. We design web-based applications that are optimized for performance, usability, and accessibility by utilizing cutting-edge technologies and frameworks.",
            animation: "fade-up"
        },
        {
            title: "Custom Mobile Development",
            description: "Our skilled developers can assist you with developing unique mobile applications that meet your business's needs. We have the expertise to bring your idea to life, whether you need a native iOS or Android app, a cross-platform app, or a web app.",
            animation: "fade-up"
        },
        {
            title: "Machine Learning",
            description: "At Code Flamme, we specialize in developing and deploying machine learning models across various domains. By leveraging machine learning, we help businesses enhance decision-making, analyze complex datasets, and deliver personalized experiences. Whether you need predictive models or intelligent automation, we have the expertise to provide innovative machine learning solutions tailored to your needs.",
            animation: "fade-up"
        },
        {
            title: "UI/UX Design",
            description: "Designing successful software solutions requires excellent UI/UX, in our view. Our expert UI/UX designers can assist you in developing user-centric designs that are equally functional and visually attractive. We can assist you with developing a design that matches your brand and satisfies the demands of your users, from wireframing and prototype through visual design and branding.",
            animation: "fade-up"
        },
        {
            title: "Digital Marketing",
            description: "We provide a variety of digital marketing services to help you reach your target audience and build your business. Search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and other services are offered by us. We foster successful digital marketing campaigns that deliver results utilizing data-driven methods.",
            animation: "fade-up"
        },
        {
            title: "SEO Optimization",
            description: "Our SEO optimization services are designed to boost your website’s visibility and rankings in search engine results. Through in-depth keyword research, on-page optimization, technical improvements, and strategic link building, we optimize your website to attract more organic traffic and improve its overall performance.",
            animation: "fade-up"
        }
    ];
    return (
        <div className='no |  mx-4 | sm:mx-6 | md:mx-8 | xl:w-11/12 xl:mx-auto |  2xl:w-9/12 2xl:mx-auto'>
            <OurServices title={"Our Services"} description={"We provide a wide range of Services"} />
            <div className=' mb-28 no | grid grid-cols-1 gap-5 | md:grid-cols-2'>
                {cardData.map((card, index) => (
                    <div key={index} data-aos={card.animation} className='flex'>
                        <Card title={card.title} description={card.description} hoverOrNot={true} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurServicesSection