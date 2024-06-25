import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
function SimpleAccordian() {

    const items = [
        { title: 'What services do you offer ?', content: 'We offer a range of services including mobile development, web development, UI/UX design, and digital marketing. You can learn more about our services on the "Our Services" page of our website.', },
        { title: ' How much do your services cost ?', content: 'Our pricing varies depending on the project requirements and scope. We provide transparent and competitive pricing and will work with you to find a solution that fits your budget.', },
        { title: '   What technologies and frameworks do you use ?', content: 'We use a variety of technologies and frameworks depending on the project requirements. Some of the technologies we work with include React, Laravel, Node.js, Ruby on Rails, and more.', },
        { title: '  Do you offer ongoing maintenance and support ?', content: 'Yes, we offer ongoing maintenance and support services to ensure that your software remains up-to-date and performs at its best. We also provide training and documentation to help you and your team use the software effectively..', },
        { title: '     How long does a typical project take ?', content: 'The duration of a project depends on the scope and complexity of the project. We provide a detailed project plan that outlines the timeline and milestones for the project', },
        { title: 'How do I get Started ?', content: 'You can get started by contacting us through the form on our website, emailing us, or giving us a call. Well schedule a consultation to discuss your project requirements and provide a proposal.', },
    ];
    const [openIndex, setOpenIndex] = useState(0);
    const [heights, setHeights] = useState([]);

    const refs = useRef([]);

    useEffect(() => {
        // Calculate the heights of all content sections after the component mounts
        setHeights(refs.current.map(ref => ref.scrollHeight));
    }, []);
    const handleClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);

        } else {
            setOpenIndex(index);

        }
    };
    return (
        <div>
            <div className='w-full space-y-4'>
                {items.map((item, index) => (
                    <div key={index} className={` ${openIndex === index ? 'delay-300 duration-300 transition-all ease-in-out text-primary dark:text-primary' : "text-gray-600 "}  bg-lightBg px-8 pt-4 rounded-xl dark:bg-darkbg`}>
                        <div
                            className={` font-inter  pb-4 cursor-pointer text-lg font-semibold  ${openIndex === index ? 'text-primary dark:text-primary' : "text-gray-600 "} `}
                            onClick={() => handleClick(index)}
                            aria-expanded={openIndex === index}
                            role='button'
                        >
                            <div className='flex flex-row justify-between items-center'>
                                <h1 className='dark:text-secondary dark:text-primary'>{item.title}</h1>


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
                            <div
                                className={`transition-opacity duration-500 ease-in-out ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="text-gray-500 pb-4 dark:text-lightGray">{item.content}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default SimpleAccordian