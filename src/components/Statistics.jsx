import React from 'react';

function Statistics({ heading, text, isFlex }) {
    return (
        <div className={`${isFlex ? 'flex flex-col items-center text-start justify-center' : ''} lg:mt-0 mt-4`}>
         <div>
                <h1 className='text-primary lg:text-6xl lg:font-semibold no | text-4xl font-semibold'>{heading}</h1>
          
         </div>
         <div>
        
                <h5 className='text-gray-500 mt-2'>{text}</h5>
         </div>
        </div>
    );
}

export default Statistics;
