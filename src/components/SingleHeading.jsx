import React from 'react'

function SingleHeading({heading}) {
    return (
        <div className='xl:pt-20'>
            <div className=' w-full | xl:container xl:w-1/2  | '>
                <h1 className='text-dark | xl:text-center xl:pb-10 xl:text-4xl xl:font-bold dark:xl:text-white xl:tracking-normal'> {heading}</h1>
               
            </div>
        </div>
    )
}

export default SingleHeading