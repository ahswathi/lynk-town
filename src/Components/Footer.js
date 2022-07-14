import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
let Footer = () => {
    return (
        <>
            <div className="footer-wrapper h-60 bg-[#6A5B40]">

                <div className="footer grid place-content-center">
                    <p>Get in touch with Latest updates on Lynk town</p>
                    <div className="form1 mt-4 ">
                        <form>
                            <input type="text" placeholder="Enter mail id" />
                            <button type="button">Subscribe</button>
                        </form>
                    </div>

                    <div class="social-icon my-10 mx-[400px]">
                        <FaInstagram />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                </div>

                <div className="footer-policy grid place-content-center py-4">
                    <span>Privacy policy, Terms & Conditions</span>
                </div>
            </div>
        </>
    )
}

export default Footer;