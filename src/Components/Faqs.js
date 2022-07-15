import React from "react";
import { FaAngleDown } from "react-icons/fa";

let Faqs = () => {
    return (
        <>
            <p className="title text-center mx-[100px] text-[#6A5B40] tracking-wide">FAQ’s </p>
            <div className="flex justify-center  items-center ">
                <div className="flex justify-between rounded-10 p-10 ">
                    <ol className="">
                        <li>1. How we create link?<FaAngleDown /> </li>
                        <li>2. How can i create my account?<FaAngleDown /></li>
                        <li>3. can i share the link to any where?<FaAngleDown /></li>
                        <li>4. How customer use my link?<FaAngleDown /></li>
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Faqs;