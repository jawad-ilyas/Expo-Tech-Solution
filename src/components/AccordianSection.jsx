import React from 'react'
import OurServices from './OurServices'
import Accordion from './Accordian'

function AccordianSection() {
    return (
        <div>
            <OurServices title={"Industries we work in"} description={"Most of our projects come from the industries below"} />
            <Accordion />
        </div>
    )
}

export default AccordianSection