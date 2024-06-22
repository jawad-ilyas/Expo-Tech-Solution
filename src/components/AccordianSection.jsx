import React from 'react'
import OurServices from './OurServices'
import Accordion from './Accordian'

function AccordianSection() {
    return (
        <div className='no | mx-4 | sm:mx-6 | md:mx-8'>
            <OurServices title={"Industries we work in"} description={"Most of our projects come from the industries below"} />
            <Accordion />
        </div>
    )
}

export default AccordianSection