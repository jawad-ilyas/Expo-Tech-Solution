import React from 'react'
import Statistics from './Statistics'

function AchievementsSection() {
    return (
        <div className='xl:w-11/12 mx-auto  2xl:w-8/12 lg:mx-5  bg-lightBg flex flex-row justify-between items-center px-28 py-16 mt-12 mb-16 rounded-3xl w-full'>
            <div className='w-3/12 border-r-2 border-gray-200'>
                <Statistics heading={"50 +"} text={"Happy clients"} isFlex={true}/>
            </div>
            <div className='w-3/12  border-r-2 border-gray-200'>
                <Statistics heading={"75"} text={"Projects completed"} isFlex={true} />
            </div>
            <div className='w-3/12 border-r-2 border-gray-200'>
                <Statistics heading={"99%"} text={"Customer Satisfaction"} isFlex={true} />
            </div>
            <div className='w-3/12  '>
                <Statistics heading={"75"} text={"Positive Reviews"} isFlex={true} />
            </div>
         
             
        </div>
    )
}

export default AchievementsSection