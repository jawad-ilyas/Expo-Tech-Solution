import React, { useState } from 'react'
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

function Practice() {
    const [isOpen , setIsOpen] = useState(0);
    const [image, setImage] = useState(TechnologyAndIT);
    const handleClick = (index , validImage)=>{

        if(index == isOpen){
            setIsOpen(null)
            setImage(TechnologyAndIT)
        }
        else{
            setIsOpen(index);
            setImage(validImage)
        }

    }
    return (
        <div className='xl:w-11/12 mx-auto 2xl:w-8/12'>
            <div className='w-full flex flex-row space-x-40'>
                <div className='w-1/2'>
                    {items.map((item , index) => (
                        <div key={index}>
                            <div className='text-5xl text-primary' onClick={() => handleClick(index, item.image)}>{item.title}</div>
                            <div className={`${isOpen === index ?  "block" : "hidden"}`}>{item.content}</div>
                        </div>
                    ))}
                </div>
                <div className='w-1/2'>

                    {image && <img src={image}  /> }
                </div>
            </div>

        </div>
    )
}

export default Practice