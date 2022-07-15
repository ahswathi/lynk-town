import React from "react";

let SocialPlatform = () => {
    return (
        <>
            <p className="title lg:text-[52px] sm:text-[32px] text-[22px] text-center  text-[#6A5B40] mt-[20px] sm:mt-[80px] md:mt-[80px] lg:mt-[180px] ">What’s here for you</p>

            <div className="flex justify-center items-center  flex-col sm:flex-row lg:flex-row mx-[40px] sm:mx-[80px] lg:mx-[100px] mt-10 ">
            <div className="platform-description text-center  text-[16px] sm:text-[16px] md:text-[26px] lg:text-[36px] mb-4  sm:w-[500px] md:w-[500px] lg:w-[500px]">
                        <span>Zero Cost Selling on Social Platform</span>
                        <p>Take payments, ship products,get online customers measurements</p>
                </div>
                <div className="social-platform ">
                    <img src="/images/g1.png" alt="service1" />
                </div>
                
            </div>
        </>
    )
}

export default SocialPlatform;