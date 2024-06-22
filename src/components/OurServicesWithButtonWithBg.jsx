import React from 'react'

function OurServicesWithButtonWithBg({ title, center, description, btnText }) {
    return (
        <div className='no  | flex flex-col items-center justify-center px-12 pt-10 '>
            <h1 className='text-white text-4xl mb-3 font-semibold'>{title}</h1>
            <h5 className={`text-lightGray text-lg mt-6 mb-8 ${center === false ? "text-left" : "text-center"}`}>{description}</h5>
            <div className='pb-12'>
                <button className='rounded-3xl border-2 border-white bg-white px-6 py-3 hover:bg-secondary text-dark hover:text-dark transition-all duration-300 delay-50 no | w-full mb-2'>{btnText}</button>
                <div className='text-center'>
                    <a href='mailto:mughaljawaddev@gmail.com' className=' text-white lg:ms-6 underline font-semibold no | mt-2 mb-2 text-center'>mughaljawaddev@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default OurServicesWithButtonWithBg