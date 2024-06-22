import React from 'react';
import logoFooter from "../assets/logo-footer.png"
function Footer() {
    return (
        <div className='mb-20 pb-10'>
            <div className="xl:w-11/12 mx-auto 2xl:w-8/12 bg-[url('/src/assets/footer-wave.png')] bg-no-repeat bg-cover py-16 bg-dark text-white rounded-3xl pt-28 px-24">
                <div className="">
                    <div className="">
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div className="md:w-6/12 mb-8 md:mb-0">
                                <img src={logoFooter} alt="Code Flamme" className="h-10 mb-4" />
                                <p className='text-lightGray w-2/3'>We are dedicated to delivering innovative digital solutions that drive business growth and success. We create tailor-made software solutions that exceed client expectations and empower their digital transformation journey.</p>
                            </div>
                            <div className="md:w-2/12 mb-8 md:mb-0">
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
                            <div className="md:w-2/12  ">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                                    <ul className='text-lightGray'>
                                        <li><a href="#" className="hover:underline">Help Center</a></li>
                                        <li><a href="#" className="hover:underline">Terms of Services</a></li>
                                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="md:w-2/12  ">

                                <div>
                                    <h3 className="text-lg font-semibold mb-4 ">Contact us</h3>
                                    <p><a href="mailto:support@codeflamme.com" className="hover:underline      text-lightGray">support@codeflamme.com</a></p>
                                    <p className='text-lightGray'>+92-328-8324786</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 ">
                            <div>
                                <p>Copyright © 2024 Code Flamme. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
