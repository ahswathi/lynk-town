import React from "react";

let BrandingMarketing = () => {
    return (
        <>
            <div className="flex justify-center gap-20 items-center flex-col-reverse sm:flex-row lg:flex-row mx-[20px] sm:mx-[80px] lg:mx-[100px] mt-10 ">
                <div className="social-platform">
                    <img src="/images/g2.png" className="" alt="service1" />
                </div>
                <div className="platform-description text-center text-[16px] sm:text-[16px] md:text-[26px] lg:text-[36px] mb-4 sm:w-[500px] md:w-[500px] lg:w-[500px]">
                    <span>Daily tips on Branding & Marketing</span>
                    <p>Increase followers, Create interactive posts, create engaging reels, Business growth</p>
                </div>
            </div>
        </>
    )
}

export default BrandingMarketing;