import React from 'react'

function CardWithNoBg({ title, description, animation, image, hoverOrNot, imageBg }) {
    return (
        <div className={` ${hoverOrNot === false ? "" : " hover:bg-primary group"}  hover:cursor-pointer  rounded-3xl flex flex-col justify-between ${animation}`}>
            <div className='lg:space-y-4  no | flex flex-col items-center justify-center space-y-2 text-center'>
                <div className={`${imageBg ? " bg-primary size-20 flex items-center justify-center rounded-2xl" : ""}`}>
                    <img src={image} alt="Web Development" />

                </div>
                <h2 className='text-dark text-2xl font-semibold group-hover:text-white'>{title}</h2>
                <p className='text-gray-500 text-lg group-hover:text-lightGray'>
                    {description}
                </p>
            </div>
           
        </div>
    )
}

export default CardWithNoBg