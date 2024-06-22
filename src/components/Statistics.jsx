import React from 'react';

function Statistics({ heading, text, isFlex }) {
    return (
        <div className={`${isFlex ? 'flex flex-col items-center text-start justify-center' : ''}`}>
         <div>
                <h1 className='text-primary text-6xl font-semibold'>{heading}</h1>
          
         </div>
         <div>
        
                <h5 className='text-gray-500 mt-2'>{text}</h5>
         </div>
        </div>
    );
}

export default Statistics;