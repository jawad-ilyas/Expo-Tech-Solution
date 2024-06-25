import React from 'react'
import Phase1 from "../assets/aboutus/light_01.png"
import Phase1Dark from "../assets/aboutus/dark_01.png"
import { useSelector } from 'react-redux'
function Phase({ title, description, left, phaseNumber, lightModeimage, DarkModeImage }) {

    const theme = useSelector(state => state.theme.themeValue)

    return (
        <div>
            {left === true ? <div className=' w-full | xl:container xl:px-16 | '>

                <div className='w-full | xl:flex xl:items-start xl:justify-between xl:space-x-28 '>
                    <div className='xl:w-1/2 '>
                        <div className='pb-4'>
                            <div className='bg-primaryLight dark:bg-darkbg w-24 h-8 text-center    rounded-full | xl:flex xl:items-center xl:justify-center'>
                                <p className='text-primary'>{phaseNumber}</p>
                            </div>
                        </div>
                        <h2 className='text-dark text-3xl font-semibold group-hover:text-white | xl:mb-4 dark:text-secondary'>{title}</h2>
                        <p className='text-gray-500 text-base group-hover:text-lightGray | dark:text-lightGray'>
                            {description}
                        </p>
                    </div>
                    <div className='xl:w-1/2 mt-12'>
                        {/* Conditional rendering based on theme */}
                        {theme === 'dark' ? (
                            <img src={DarkModeImage} className='shadow' alt="Phase 01 Dark Mode" />
                        ) : (
                            <img src={lightModeimage} alt="Phase 01 Light Mode" />
                        )}
                    </div>
                </div>
            </div> : <div className=' w-full | xl:container xl:px-16 | '>

                <div className='w-full | xl:flex xl:items-start xl:justify-between xl:space-x-28 '>

                    <div className='xl:w-1/2  mt-12'>
                        {/* Conditional rendering based on theme */}
                        {theme === 'dark' ? (
                            <img src={DarkModeImage} className='shadow' alt="Phase 01 Dark Mode" />
                        ) : (
                            <img src={lightModeimage} alt="Phase 01 Light Mode" />
                        )}
                    </div>
                    <div className='xl:w-1/2 '>
                        <div className='pb-4'>
                            <div className='bg-primaryLight dark:bg-darkbg w-24 h-8 text-center    rounded-full | xl:flex xl:items-center xl:justify-center'>
                                <p className='text-primary'>{phaseNumber}</p>
                            </div>
                        </div>
                        <h2 className='text-dark text-3xl font-semibold group-hover:text-white | xl:mb-4 dark:text-secondary'>{title}</h2>
                        <p className='text-gray-500 text-base group-hover:text-lightGray | dark:text-lightGray'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Phase