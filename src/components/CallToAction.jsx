import React from 'react'

function CallToAction({ heading, descritpion }) {
    return (
        <div className='bg-dark dark:bg-darkbg'>
            <div className=' w-full | xl:container xl:flex xl:flex-col xl:h-96 xl:justify-center  | '>
                <h1 className="text-secondary  | xl:font-bold   xl:text-7xl xl:leading-snug xl:w-2/3 ">{heading}</h1>
                <p className='text-lightGray | xl:mt-4 xl:w-10/12 xl:leading-normal xl:text-lg
                '>{descritpion}</p>
            </div>
        </div>
    )
}

export default CallToAction