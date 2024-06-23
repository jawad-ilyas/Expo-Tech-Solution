import React, { useState, useRef, useEffect } from 'react';
import RealEstate from '../assets/real-estate.png';
import TechnologyAndIT from '../assets/technology-and-it.png';
import Ecommerce from '../assets/ecommerce.png';
import Sciences from '../assets/sciences.png';
import FinanceAndBanking from '../assets/finance-and-banking.png';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const items = [
    { title: 'Technology and IT', content: 'Our expertise lie in providing innovative digital solutions to clients in the technology and IT sector, helping them stay at the forefront of technological advancements and navigate complex digital challenges.', image: TechnologyAndIT },
    { title: 'E-Commerce and Retail', content: 'We partner with businesses in the e-commerce and retail industries to create user-friendly online platforms, enhance customer experiences, and drive sales through effective digital marketing strategies.', image: Ecommerce },
    { title: 'Healthcare and Life Sciences', content: 'Our team collaborates with healthcare and life sciences organizations to develop cutting-edge software solutions that streamline operations, improve patient care, and leverage data for informed decision-making.', image: Sciences },
    { title: 'Finance and Banking', content: 'We offer our digital expertise to the finance and banking sector, developing secure and efficient software solutions that enable seamless transactions, enhance customer engagement, and ensure compliance with industry regulations.', image: FinanceAndBanking },
    { title: 'Real Estate', content: 'We extend our digital solutions to the real estate industry, helping real estate agencies and professionals leverage technology to streamline property listings, enhance virtual property tours, and optimize marketing efforts for buying, selling, and renting properties.', image: RealEstate },
];

function Accordion() {
    const [openIndex, setOpenIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(TechnologyAndIT);



    // ! this state is used for the get height of the content
    const [heights, setHeights] = useState([]);


    // ! use ref for the get reference of the element
    const refs = useRef([]);
    useEffect(() => {
        // Calculate the heights of all content sections after the component mounts
        console.log(heights)
        setHeights(refs.current.map(ref => ref.scrollHeight));
    }, []);

    const handleClick = (index, image) => {
        if (openIndex === index) {
            setOpenIndex(null);
            setCurrentImage(TechnologyAndIT);
        } else {
            setOpenIndex(index);
            setCurrentImage(image);
        }
    };

    return (
        <div className=' mb-20 ' >
            <div className='no | flex flex-col items-center |  lg:space-x-16 lg:flex-row  '>
                <div className='lg:w-1/2 lg:space-y-4 no |  order-1 mx-4 mt-4 | md:mx-8 lg:order-0'>
                    {items.map((item, index) => (
                        <div key={index} className={` ${openIndex === index ? 'delay-300 duration-300 transition-all ease-in-out text-primary' : "text-gray-600 "} `}>
                            <div
                                className={` font-inter  pb-4 cursor-pointer lg:text-3xl font-semibold  ${openIndex === index ? 'text-primary' : "text-gray-600 "} no | text-2xl `}
                                onClick={() => handleClick(index, item.image)}
                                aria-expanded={openIndex === index}
                                role='button'
                            >
                                <div className='flex flex-row justify-between items-center'>
                                    <h1>{item.title}</h1>


                                    {openIndex === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                                </div>
                            </div>
                            <div
                                ref={el => refs.current[index] = el}
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                style={{
                                    maxHeight: openIndex === index ? `${heights[index]}px` : '0'
                                }}
                            >
                                <div className={` transition-opacity duration-500 ease-in-out   ${openIndex === index ? 'opacity-100' : 'opacity-0'} `}>
                                    <div className='text-gray-500 p-2'>{item.content}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' no | lg:w-1/2 p-2 image_class  order-0 flex items-center justify-center | lg:order-1'>
                    {currentImage && <img className='rounded-3xl' src={currentImage} alt="Selected" />}
                </div>
            </div>
        </div>
    );
}

export default Accordion;
