import React from "react";
import { FaAngleDown } from "react-icons/fa";

let Faqs = () => {
    return (
        <>
           <p className="title text-center  text-[#6A5B40] tracking-wide">FAQ’s </p>
            <div className="faqs-wrapper mb-20 ">
                <div className="faqs">
                <ol type="1">
                    <li>1. How we create link?<FaAngleDown/> </li>
                    <li>2. How can i create my account?<FaAngleDown/></li>
                    <li>3. can i share the link to any where?<FaAngleDown/></li>
                    <li>4. How customer use my link?<FaAngleDown/></li>
                </ol>
               {/*  </div>
                <div className="faqs">

                </div>
                <div className="faqs">

                </div>
                <div className="faqs"> */}

                </div>
            </div>
        </>
    )
}
export default Faqs;