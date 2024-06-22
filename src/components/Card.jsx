import React from 'react';
import ArrowWithCircle from '../assets/ArrowWithCircle';

function Card({ title, description, animation, image, hoverOrNot, imageBg }) {
    return (
        <div className={`bg-lightBg ${hoverOrNot === false ? "" : " hover:bg-primary group"}  hover:cursor-pointer lg:px-10 lg:py-12 rounded-3xl flex flex-col justify-between n0 | px-4 py-6` }>
            <div className='space-y-4 '>
                <div className={`${imageBg ? " bg-primary size-20 flex items-center justify-center rounded-2xl" : ""}`}>
                    <img src={image} alt="Web Development" />

                </div>
                <h2 className='text-dark text-2xl font-semibold group-hover:text-white'>{title}</h2>
                <p className='text-gray-500 text-lg group-hover:text-lightGray'>
                    {description}
                </p>
            </div>
            {hoverOrNot &&
                <div className='group-hover:text-white mt-4 text-primary'>
                    <ArrowWithCircle />
                </div>}
        </div>
    );
}

export default Card;
