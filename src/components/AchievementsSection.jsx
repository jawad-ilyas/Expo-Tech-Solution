import React from 'react'
import Statistics from './Statistics'

function AchievementsSection() {
    return (
        <div className='xl:w-11/12 xl:mx-auto  2xl:w-8/12 lg:mx-5   lg:px-28 lg:py-16 lg:mt-12 lg:mb-16  w-full  no | grid grid-cols-2 justify-between items-center mx-5 rounded-3xl bg-lightBg mt-8 mb-8 p-4'>
            <div className='lg:w-3/12 border-r-2 border-gray-200'>
                <Statistics heading={"50 +"} text={"Happy clients"} isFlex={true}/>
            </div>
            <div className='lg:w-3/12  border-r-2 border-gray-200'>
                <Statistics heading={"75"} text={"Projects completed"} isFlex={true} />
            </div>
            <div className='lg:w-3/12 border-r-2 border-gray-200'>
                <Statistics heading={"99%"} text={"Customer Satisfaction"} isFlex={true} />
            </div>
            <div className='lg:w-3/12  '>
                <Statistics heading={"75"} text={"Positive Reviews"} isFlex={true} />
            </div>
         
             
        </div>
    )
}

export default AchievementsSection