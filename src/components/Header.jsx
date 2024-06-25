import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeChange } from '../features/theme/ThemeSlice'
import { LuExternalLink } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from 'react-icons/io5';

export default function Header() {




  const dispatch = useDispatch()

  const themeValue = useSelector((state) => state.theme.themeValue)
  // console.log("themeValue", themeValue)
  const handleThmeChange = () => {

    const themeChangeValue = themeValue == "light" ? "dark" : "light"
    dispatch(themeChange(themeChangeValue))
    document.documentElement.classList.toggle('dark', themeChangeValue === 'dark');

  }

  const mainMenu = [
    { link: "aboutus", name: "About Us" },
    { link: "aboutus", name: "Technologies" },
    { link: "aboutus", name: "Our Services" },
    { link: "aboutus", name: "Portfolio" },
    { link: "aboutus", name: " Blogs" },
    { link: "aboutus", name: " Careers" },
  ]

  return (
    <div className='dark:bg-red-400'>
      <div className='xl:w-11/12 xl:mx-auto |  2xl:w-9/12 2xl:mx-auto  flex justify-between  items-center fixed top-3 inset-0 bg-dark z-[1000000000000000] text-white h-20 rounded-full shadow-xl py-8'>
        <div className=' flex items-center'>
          <img className='h-10 w-48 object-contain' src='https://codeflamme.com/_next/image?url=%2Flogo-light.png&w=256&q=75' />
        </div>
        <div className='flex ms-6 items-center'>
          {mainMenu.map((items, index) => (
            <a key={index} href={items.link} className='me-6'>{items.name}</a>
          ))}
          <div className='size-7 flex items-center justify-center rounded-full hover:bg-secondary/70  hover:delay-100 hover:duration-100 cursor-pointer'>
            {themeValue === 'light' ? <IoMoonOutline onClick={handleThmeChange} size={24} /> : <IoSunnyOutline onClick={handleThmeChange} size={24} />}
          </div>
          <button className='bg-primary text-light  rounded-full  px-4 py-2'>Get In Touch </button>
        </div>



      </div>

    </div>
  )
}
