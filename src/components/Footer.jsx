import React from 'react';
import logoFooter from "../assets/logo-footer.png"
function Footer() {
    return (
        <div className='dark:bg-darkbg'>
            <div className='mb-20 pb-10 no | mx-4 mt-10 | sm:mx-6 | md:mx-8 | xl:w-11/12 xl:mx-auto xl:mt-0 xl:mb-10|  2xl:w-10/12 2xl:mx-auto'>
                <div className=" bg-[url('/src/assets/footer-wave.png')] bg-no-repeat bg-cover py-16 bg-dark dark:bg-dark shadow-3xl text-white rounded-3xl lg:pt-28 lg:px-24 no | px-8 pt-10">
                    <div className="">
                        <div className="">
                            <div className="no | flex flex-col  justify-between items-start | lg:flex-row lg:justify-between">
                                <div className="  mb-8 lg:mb-0 no  | w-full | md:mb-8 lg:w-4/12  lg:me-12">
                                    <img src={logoFooter} alt="Code Flamme" className="h-10 mb-4" />
                                    <p className='text-lightGray  '>We are dedicated to delivering innovative digital solutions that drive business growth and success. We create tailor-made software solutions that exceed client expectations and empower their digital transformation journey.</p>
                                </div>
                                <div className=" mb-8 md:mb-0  md:hidden lg:block lg:w-3/12">
                                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                                    <ul className='text-lightGray'>
                                        <li><a href="#" className="hover:underline">Home</a></li>
                                        <li><a href="#" className="hover:underline">About Us</a></li>
                                        <li><a href="#" className="hover:underline">Services</a></li>
                                        <li><a href="#" className="hover:underline">Portfolio</a></li>
                                        <li><a href="#" className="hover:underline">Blogs</a></li>
                                        <li><a href="#" className="hover:underline">Careers</a></li>
                                    </ul>
                                </div>
                                <div className=" mb-8  md:hidden lg:block lg:w-3/12">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                                        <ul className='text-lightGray'>
                                            <li><a href="#" className="hover:underline">Help Center</a></li>
                                            <li><a href="#" className="hover:underline">Terms of Services</a></li>
                                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className=" md:hidden lg:block lg:w-3/12">

                                    <div>
                                        <h3 className="text-lg font-semibold mb-4 ">Contact us</h3>
                                        <p><a href="mailto:support@codeflamme.com" className="hover:underline      text-lightGray">support@codeflamme.com</a></p>
                                        <p className='text-lightGray'>+92-328-8324786</p>
                                    </div>
                                </div>

                                <div className='hidden | md:w-full | lg:hidden  md:flex md:flex-row md:justify-between r'>

                                    <div className=" mb-8 ">
                                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                                        <ul className='text-lightGray'>
                                            <li><a href="#" className="hover:underline">Home</a></li>
                                            <li><a href="#" className="hover:underline">About Us</a></li>
                                            <li><a href="#" className="hover:underline">Services</a></li>
                                            <li><a href="#" className="hover:underline">Portfolio</a></li>
                                            <li><a href="#" className="hover:underline">Blogs</a></li>
                                            <li><a href="#" className="hover:underline">Careers</a></li>
                                        </ul>
                                    </div>
                                    <div className=" mb-8 ">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                                            <ul className='text-lightGray'>
                                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                                <li><a href="#" className="hover:underline">Terms of Services</a></li>
                                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className=" mb-8 ">

                                        <div>
                                            <h3 className="text-lg font-semibold mb-4 ">Contact us</h3>
                                            <p><a href="mailto:support@codeflamme.com" className="hover:underline      text-lightGray">support@codeflamme.com</a></p>
                                            <p className='text-lightGray'>+92-328-8324786</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 ">
                                <div className='text-center'>
                                    <p>Copyright © 2024 Code Flamme. All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
