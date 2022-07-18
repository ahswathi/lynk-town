import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const dataCollection = [
    {
        question: "1. How we create link?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Id aliquam varius in vitae in interdum.",
    },
    {
        question: "2. How can i create my account?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Id aliquam varius in vitae in interdum.",
    },
    {
        question: "3. Can i share the link to any where?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Id aliquam varius in vitae in interdum.",
    },
    {
        question: "4. How customer use my link?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Id aliquam varius in vitae in interdum.",
    },
];

let Faqs = () => {

    let [accordion, setActiveAccordion] = useState(-1);

    let toggleAccordion = (index) => {
        setActiveAccordion(index);
    }

    return (
        <>
        <div className="my-[80px]">
            <p className="text-center mx-[80px] text-[#6A5B40] text-2xl  font-semibold tracking-wide mb-[40px] ">FAQ’s </p>
            {
                dataCollection.map((item, index) => {
                    return (

                        <div className="">
                            <div key={index} onClick={() => toggleAccordion(index)}>

                                <div className="faq_heading  flex justify-between mx-[20px]  text-[16px]  lg:text-[25px] lg:mx-[240px] md:mx-[180px] sm:mx-[160px] bg-[#EAE7E0] rounded-tl-[13px] rounded-tr-[13px] px-2 ">
                                    <h3 className={accordion === index ? "active" : ""}
                                    >
                                        {item.question}</h3>
                                    {accordion === index ? (
                                        <>
                                            <FaAngleUp />
                                        </>
                                    )
                                        :
                                        (
                                            <>
                                                <FaAngleDown />
                                            </>
                                        )

                                    }
                                </div>

                                <div className="faq_description text-[12px] px-2 mx-[20px]  lg:text-[25px] lg:mx-[240px] md:mx-[180px] sm:mx-[160px] bg-[#EAE7E0] rounded-bl-[13px] rounded-br-[13px] px-2 mb-[14px]">
                                    <p className={accordion === index ? "active" : "inactive"}  >
                                        {item.answer}</p>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
            </div>

        </>
    )

}

export default Faqs;