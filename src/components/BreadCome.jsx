import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa6";
import GreaterThan from "../assets/aboutus/Greaterthan.jsx"

function Breadcrumb() {
    let location = useLocation();
    const [pathLink, setPathLink] = useState([]);

    useEffect(() => {
        const pathnames = location.pathname;
        const newStr = pathnames.replace(/\//g, '');
        console.log(newStr)
        if (newStr === "aboutus") {
            setPathLink("About Us")
        }

    }, [location]);

    return (
        <div className=''>
            <div className='   no |  w-full h-48 | xl:container xl:mx-auto xl:py-12 xl:flex xl:items-end xl:ps-6  flex flex-row items-center| '>
                <div className='flex flex-row items-center '>

                    <Link to="/" className=' no | text-sm text-gray-600 dark:text-lightGray | xl:me-2 '>Home</Link>
                    {/* <FaGreaterThan size={13} color='text-primary' /> */}
                    <GreaterThan />
                </div>


                <Link className='xl:ms-2 text-primary text-sm' >{pathLink}</Link>


            </div>
        </div>
    );
}

export default Breadcrumb;
