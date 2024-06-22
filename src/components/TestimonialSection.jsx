import React from 'react'
import OurServices from './OurServices'
import Testimonials from './Testimonials'
import testominal from "../assets/02.jpeg"

function TestimonialSection() {
    const testimonials = [
        {
            name: "Robin Paine",
            title: "CEO",
            company: "TakeNote",
            content: "Quality, efficiency, and innovation – the three words that define their work ethic.",
            image: testominal
        },
        {
            name: "Alison",
            title: "Founder",
            company: "CardClub",
            content: "They're not just our developers; they're our tech partners. Their commitment to our success is evident.",
            image: testominal
        },
        {
            name: "Eric Sellers",
            title: "Founder",
            company: "9Caro",
            content: "Exceptional service, top-notch code. The team brought our vision to life seamlessly!",
            image: testominal
        },
        {
            name: "Jason Gershonovitch",
            title: "Co-Founder",
            company: "Duclair Foundation",
            content: "From concept to completion, their approach was transparent and collaborative. A joy to work with!",
            image: testominal
        },
        {
            name: "Christopher Suscha",
            title: "Co-Founder",
            company: "Backpack",
            content: "Their expertise is evident in the quality of the software they delivered.",
            image: testominal
        },
        {
            name: "Flavia Neascu",
            title: "Co-Founder",
            company: "Green Rewards",
            content: "Their dedication to delivering quality is what sets them apart. Truly exceptional developers.",
            image: testominal
        }
    ];

    return (
        <div className='mb-20 no | mx-6 | sm:mx-8'>
            <div className='xl:w-11/12 mx-auto 2xl:w-8/12'>
                <OurServices title={"Testimonials"} description={"What our clients are saying"} />
                <div className='no | grid grid-cols-1 gap-x-0 gap-y-2'>
                    {testimonials.map((items , index)=>(
                        <Testimonials key={index} content={items.content}  image={items.image} name={items.name} title={items.title} company={items.company} /> 
                    ))}
               
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection