import React from 'react';
import Button from './Button';
import { TiTick } from "react-icons/ti";
import Tick from "/src/assets/tick.svg"
function HeroSection() {
    return (
        <div className=' text-light bg-dark font-inter bg-[url("/src/assets/hero-wave.png")] bg-no-repeat bg-cover mx-4 rounded-3xl px-6 py-12 sm:mx-6 md:mx-8 lg:w-full | xl:w-11/12 xl:mx-auto |  2xl:10/12 shadow-2xl'>
            <div className='sm:flex-row | lg:flex  lg:justify-between  | xl:py-16 '>
                <div className='sm:w-full lg:w-1/2'>
                    <h1 className='sm:text-center lg:leading-snug lg:font-bold text-center text-4xl font-semibold leading-snug sm:text-5xl sm:leading-snug lg:mt-8 lg:text-5xl'>
                        <span className='2xl:block block md:inline-block lg:block'>Compiling Code</span>
                        <span> With </span>
                        <span className="text-primary md:inline-block"> High-Tech</span>
                        <span className='xl:block'> Flames</span>
                    </h1>
                </div>

                <div className='w-full sm:w-full lg:w-1/2 lg:pt-8 lg:px-12'>
                    <p className='lg:text-xl text-lightGray lg:leading-8 text-center text-lg mt-4 | xl:text-left'>
                        Our diverse range of services is designed to help your business succeed in the ever-evolving digital world.
                    </p>
                    <button className='w-full block sm:w-full sm:mx-auto sm:mt-3 sm:block md:hidden bg-primary font-inter font-bold mt-6 py-4 px-8 rounded-full'>
                        Let's Connect
                    </button>
                    <button className='hidden mx-auto sm:mt-3 sm:hidden md:block bg-primary font-inter font-bold mt-6 py-4 px-8 rounded-full | xl:mt-6'>
                        Let's Connect
                    </button>
                </div>
            </div>
            <div className='flex w-full py-8 items-center justify-between'>
                <div className='lg:w-1/2'></div>
                <div className='lg:w-1/2 lg:ps-20 w-full flex flex-col justify-center items-center sm:flex-row'>
                    <div className='flex items-center'>
                        <img src={Tick} alt="tick" />
                        <p className='ms-2 text-lightGray text-base'>Full spectrum of services</p>
                    </div>
                    <div className='flex items-center ms-2'>
                        <img src={Tick} alt="tick" />
                        <p className='ms-2 text-lightGray text-base'>Flexible work terms</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
