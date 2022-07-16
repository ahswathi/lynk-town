import React from "react";
import { FaAngleDown } from "react-icons/fa";

let Faqs = () => {
    return (
        <>
            <p className="title text-center mx-[80px] text-[#6A5B40] tracking-wide mb-[20px] mt-[100px]">FAQ’s </p>
            <div className="  rounded-10 mx-[20px] mb-[40px]">

                <ul className="" >
                    <li className=" flex justify-between text-[16px]  lg:text-[25px] lg:mx-[240px] md:mx-[180px] sm:mx-[160px] bg-[#EAE7E0] rounded-[13px] px-2 mb-[14px]">1. How we create link?
                        <FaAngleDown className="inline  " />
                    </li>
                    <li className="flex justify-between text-[16px]  lg:text-[25px] lg:mx-[240px] md:mx-[180px] sm:mx-[160px] bg-[#EAE7E0] rounded-[13px] px-2 mb-[14px]"> 2. How can i create my account?
                        <FaAngleDown className="inline " />
                    </li>
                    <li className="flex justify-between text-[16px]  lg:text-[25px] lg:mx-[240px] md:mx-[180px] sm:mx-[160px]  bg-[#EAE7E0] rounded-[13px] px-2 mb-[14px]">3. Can i share the link to any where?
                        <FaAngleDown className="inline " />
                    </li>
                    <li className="flex justify-between text-[16px]  lg:text-[25px] lg:mx-[240px] md:mx-[180px] sm:mx-[160px] bg-[#EAE7E0] rounded-[13px] px-2 mb-[14px]"> 4. How customer use my link?
                        <FaAngleDown className="inline " />
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Faqs;