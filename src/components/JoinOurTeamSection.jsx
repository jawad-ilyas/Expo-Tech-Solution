import React from 'react'
import OurServices from './OurServices'
import OurServicesWithButton from './OurServicesWithButton'
import OurServicesWithButtonWithBg from './OurServicesWithButtonWithBg'

function JoinOurTeamSection() {
    return (
        <div className='bg-lightBg dark:bg-darkbg'>
            <div className='  no | mx-4 | sm:mx-6  | md:mx-8 | xl:rounded-3xl xl:container xl: |  2xl:w-9/12 2xl:mx-auto 2xl:rounded-3xl | '>
                <div className=''>

                    <div className='  no | flex flex-col justify-between items-start  | lg:flex-row '>
                        <div className='  no | px-3 pt-10 | lg:w-6/12 | xl:ps-12 | 2xl:ps-16'>
                            <OurServicesWithButton title={"Join Our Team"} description={"We invite you to embark on a journey of growth, innovation, and collaboration. Join Code Flamme and become part of a dynamic community that values creativity, diversity, and professional development. Explore our open positions and take the first step towards a rewarding and fulfilling career where your ideas and contributions truly matter."} center={false} btnText={"Apply for a job"} />

                        </div>
                        <div className='  lg:w-6/12 lg:ms-12  lg:px-8 lg:py-20 rounded-3xl bg-primary  '>
                            <OurServicesWithButtonWithBg title={"Ready to discuss your project?"} description={"We'd be delighted to hear about your project and discuss about how our expertise can support achieving your objectives. Contact us today to start the conversation and let's work together to build something great."} center={false} btnText={"Contact us"} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default JoinOurTeamSection