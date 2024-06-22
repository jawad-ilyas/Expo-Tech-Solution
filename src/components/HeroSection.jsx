import React from 'react'
import Button from './Button'
import { TiTick } from "react-icons/ti";

function HeroSection() {
    return (
        <div className='mt-32 xl:w-11/12 lg:mx-auto  2xl:w-11/12
        lg:flex lg:flex-col lg:items-start  lg:rounded-3xl  text-light bg-dark lg:pt-28 lg:px-24 font-inter |  mx-2 rounded-3xl  px-6 py-12'>

            <div className='lg:flex lg:justify-between 2xl:px-32 sm:flex-row'>
                <div className='lg:w-1/2 sm:w-full'>
                    <h1 className='lg:text-6xl sm:text-center sm:text-3xl  lg:leading-snug lg:font-bold text-center no | text-4xl font-semibold leading-snug'> <span className='2xl:block block'>Compiling  Code</span>   With <span className="text-primary">High-Tech </span> <br></br>Flames</h1>
                </div>

                <div className='lg:w-1/2  sm:w-full lg:pt-8 lg:px-24 no| w-full'>

                    <p className='lg:text-xl  text-lightGray lg:leading-8 no| text-center text-lg mt-4 '> Our diverse range of services is designed to help your business succeed in the ever-evolving digital world.</p>
                    <Button className="no| w-full" text={"Lets Connect"} />
                </div>
            </div>
            <div className='flex w-full py-8 items-center justify-between'>
                <div className='lg:w-1/2'></div>
                <div className='lg:w-1/2 lg:ps-20 no| w-full flex flex-col justify-center items-center'>
                    <div className='flex items-center'> <img className='' src='/src/assets/tick.svg' /><p className='ms-2 text-lightGray text-base'>Full spectrum of services</p> </div>
                    <div className='flex items-center ms-2'> <img className='' src='/src/assets/tick.svg' /><p className='ms-2 text-lightGray text-base'>Flexible work terms</p> </div>
                    
                </div>
            </div>

        </div>
    )
}

export default HeroSection