import React, { useState } from 'react';
import Phase1DarkMode from "../assets/aboutus/dark_01.png";  // Example, replace with `frontImage` and `backImage` props as needed.

const FlipCard = ({ frontTitle, frontDescription, frontImage, backImage, hoverColor }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flex  items-center justify-center ">
            <div className='h-[600px] w-96 cursor-pointer '
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}>
                <div className='relative w-full h-full rounded-xl'
                    style={{
                        transition: 'transform 0.7s',
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'none'
                    }}>
                    {/* Front of the Card */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-lightBg  text-center shadow-md dark:bg-darkbg"
                        style={{
                            backfaceVisibility: 'hidden',
                  
                            zIndex: 2  // Ensure text is on top
                        }}>
                        <img src={frontImage} alt="Back Image" className="size-16 mb-4 rounded-lg" />
                        <h2 className='text-3xl mb-2 font-bold text-darkbg/80 dark:text-secondary'>{frontTitle}</h2>
                        <p className='text-center text-gray-500 xl:px-8 dark:text-lightGray'>{frontDescription}</p>
                    </div>

                    {/* Back of the Card */}
                    <div className={`absolute hover:bg-${hoverColor} inset-0 flex flex-col items-center justify-center rounded-xl  text-center  shadow-md`}
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',

                            zIndex: 100 // Ensure text is on top
                        }}>
                        <img src={backImage} alt="Back Image" className="size-16  mb-4 rounded-lg" />
                        <h2 className='text-5xl mb-2 font-semibold text-white leading-snug'>{frontTitle}</h2>
                        <p className='text-center text-lightGray xl:px-8 text-lg'>{frontDescription}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
