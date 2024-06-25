import React from 'react'

function OurServicesWithButton({ title, center, description, btnText }) {
    return (
        <div className='flex flex-col items-start justify-start '>
            <h1 className='text-dark text-4xl mb-3 font-semibold dark:text-secondary'>{title}</h1>
            <h5 className={`text-gray-500 text-lg mt-6 mb-8 ${center === false ? "text-left" : "text-center"} dark:text-lightGray`}>{description}</h5>
            <button className='rounded-3xl border-2 border-dark px-6 py-3 hover:bg-dark hover:text-white transition-all duration-300 delay-50 dark:border-secondary dark:text-secondary'>{btnText}</button>
        </div>
    )
}

export default OurServicesWithButton