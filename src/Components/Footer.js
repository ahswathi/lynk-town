import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
let Footer = () => {
    return (
        <>
            <div className=" mx-auto w-screen max-h-[200px] lg:max-h-[300px] sm:max-h-[260px] bg-[#6A5B40]">

                <div className="text-center max-h-[160px] lg:max-h-[260px] sm:max-h-[220px]">
                    <p className="text-center font-medium text-white lg:text-[40px] sm:text-[30px] md:text-[26px] text-[20px]">Get in touch with Latest updates on Lynk town</p>
                    
                        <form className="flex justify-center my-4  mx-[100px]">
                            <input type="text" className="pl-2 border bg-transparent " placeholder="Enter mail id" />
                            <button type="button" className="bg-white px-2">Subscribe</button>
                        </form>

                    <div class="flex justify-center gap-4 text-white text-[24px] my-4">
                        <FaInstagram />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                </div>

                <div className="text-center font-medium text-white lg:text-[20px] sm:text-[16px] text-[16px] border-t">
                    <span>Privacy policy, Terms & Conditions</span>
                </div>
            </div>
        </>
    )
}

export default Footer;