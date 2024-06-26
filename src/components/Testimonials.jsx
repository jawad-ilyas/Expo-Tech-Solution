import React from 'react'
import { PiQuotesFill } from "react-icons/pi";
import testominal from "../assets/02.jpeg"
function Testimonials({ content, image, name, title, company }) {
    return (
        <div>
            <div>
                <div className=' bg-lightBg rounded-3xl  px-10 py-12 flex flex-col items-start | dark:bg-darkbg'>
                    <div className='text-primary rotate-180'>
                        <PiQuotesFill />
                    </div>
                    <p className='text-gray-500 text-xl dark:text-secondary'>   {content}</p>
                </div>
                <div className='my-8 flex items-start'>
                    <div className='size-12'>
                        <img src={image} className='rounded-full' />
                    </div>
                    <div className='ms-4'>
                        <div>
                            <h1 className='text-black dark:text-secondary'>{name}</h1>
                        </div>
                        <div><h5 className='text-gray-500 dark:text-lightGray'>{title}, {company}

                        </h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials