import React from 'react'
import OurServices from './OurServices'
import OurServicesWithButton from './OurServicesWithButton'
import OurServicesWithButtonWithBg from './OurServicesWithButtonWithBg'

function JoinOurTeamSection() {
    return (
        <div className=' bg-lightBg no | mx-4'>
            <div className='xl:w-11/12 mx-auto 2xl:w-8/12'>

                <div className='no | flex flex-col justify-between items-start '>
                    <div className='2xl:w-5/12 xl:w-5/12 pt-16 py-5 mb-sm-2 mb-md-3 mb-lg-5 mt-3 mt-sm-4  '>
                        <OurServicesWithButton title={"Join Our Team"} description={"We invite you to embark on a journey of growth, innovation, and collaboration. Join Code Flamme and become part of a dynamic community that values creativity, diversity, and professional development. Explore our open positions and take the first step towards a rewarding and fulfilling career where your ideas and contributions truly matter."} center={false} btnText={"Apply for a job"}/>

                    </div>
                    <div className='2xl:w-7/12 xl:w-7/12 lg:ms-24  lg:px-28 lg:py-20 rounded-3xl bg-primary  '>
                        <OurServicesWithButtonWithBg title={"Join Our Team"} description={"We'd be delighted to hear about your project and discuss about how our expertise can support achieving your objectives. Contact us today to start the conversation and let's work together to build something great."} center={false} btnText={"Contact us"} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JoinOurTeamSection