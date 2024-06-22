import React from 'react'

function OurServicesWithButtonWithBg({ title, center, description, btnText }) {
    return (
        <div className='flex flex-col items-start justify-start '>
            <h1 className='text-white text-4xl mb-3 font-semibold'>{title}</h1>
            <h5 className={`text-lightGray text-lg mt-6 mb-8 ${center === false ? "text-left" : "text-center"}`}>{description}</h5>
            <div>
                <button className='rounded-3xl border-2 border-white bg-white px-6 py-3 hover:bg-secondary text-dark hover:text-dark transition-all duration-300 delay-50'>{btnText}</button>
                <a href='mailto:mughaljawaddev@gmail.com' className=' text-white ms-6 underline font-semibold'>mughaljawaddev@gmail.com</a>
            </div>
        </div>
    )
}

export default OurServicesWithButtonWithBg