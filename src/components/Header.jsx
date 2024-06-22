import React from 'react'

export default function Header() {
    const mainMenu = [
        {link : "aboutus" , name : "About Us"},
        { link: "aboutus", name: "Technologies"},
        { link: "aboutus", name: "Our Services"},
        { link: "aboutus", name: "Portfolio"},
        { link: "aboutus", name: " Blogs"},
        { link: "aboutus", name: " Careers"},
    ]

  return (
    <div className='2xl:w-8/12 xl:w-11/12 mx-auto flex justify-between  items-center fixed top-3 inset-0 bg-dark z-[1000000000000000] text-white h-20 rounded-full shadow-xl py-8'>
        <div className=' flex items-center'>
              <img className='h-10 w-48 object-contain' src='https://codeflamme.com/_next/image?url=%2Flogo-light.png&w=256&q=75' />
        </div>
        <div className='flex ms-6 items-center'>
              {mainMenu.map((items , index)=>(
                <a key={index} href={items.link} className='me-6'>{items.name}</a>
              ))}
              <button className='bg-primary text-light  rounded-full  px-4 py-2'>Get In Touch </button>
        </div>
      


    </div>

  )
}
