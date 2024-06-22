import React from 'react'
import Statistics from './Statistics'

function AchievementsSection() {
    return (
        <div className='xl:w-11/12 xl:mx-auto  2xl:w-8/12 lg:mx-5   lg:px-28 lg:py-16 lg:mt-12 lg:mb-16    no | w-full flex flex-row flex-wrap justify-between items-center   rounded-3xl bg-lightBg  my-8 p-4 mx-2'
            style={{ width: 'calc(100% - 20px)' }}
        >
            <div className='lg:w-3/12 border-r-2 border-gray-200 no | mt-2  w-6/12'>
                <Statistics heading={"50 +"} text={"Happy clients"} isFlex={true}/>
            </div>
            <div className='lg:w-3/12  no | mt-2 w-6/12'>
                <Statistics heading={"75"} text={"Projects completed"} isFlex={true} />
            </div>
            <div className='lg:w-3/12 border-r-2 border-gray-200 no |  mt-4 w-6/12'>
                <Statistics heading={"99%"} text={"Customer Satisfaction"} isFlex={true} />
            </div>
            <div className='lg:w-3/12  no | mt-4 w-6/12'>
                <Statistics heading={"75"} text={"Positive Reviews"} isFlex={true} />
            </div>
         
             
        </div>
    )
}

export default AchievementsSection