import React from 'react'

function OurServices({ title, description, center }) {
  return (
    <div className='flex flex-col items-center justify-center '>
      <h1 className='text-dark lg:text-4xl mb-3 font-semibold no | text-3xl | sm:text-center | dark:text-secondary'>{title}</h1>
      <h5 className={`text-gray-500 mb-8 no | text-base | sm:text-center |  lg:px-8 | dark:text-lightGray  ${center === false ? "text-left" : "text-center"}`}>{description}</h5>
    </div>
  )
}

export default OurServices