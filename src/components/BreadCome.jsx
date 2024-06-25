import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <div className=' h-48 | xl:w-11/12 xl:mx-auto xl:py-12 xl:flex xl:items-end xl:ps-6  |  2xl:w-9/12 2xl:mx-auto '>
            <Link to="/" className='xl:me-2 text-gray-600'>Home</Link>
        
            {'  >  '}
            
            <Link className='xl:ms-2 text-primary' to={pathLink}>{pathLink}</Link>


        </div>
    );
}

export default Breadcrumb;
