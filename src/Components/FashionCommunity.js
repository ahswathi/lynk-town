import React from "react";

let FashionCommunity = () => {
    return (
        <>
            <div className="flex   justify-center items-center  flex-col sm:flex-row lg:flex-row mx-[40px] sm:mx-[80px] lg:mx-[100px] mt-10 ">
                <div className="platform-description text-center text-[16px] sm:text-[16px] md:text-[26px] lg:text-[36px] mb-4  sm:w-[500px] md:w-[500px] lg:w-[500px]">
                    <span>Be a part of Niche Fashion Community</span>
                    <p>Stylist, Analysts, Educators, Peers,Experts, Artists, Social media influencers</p>
                </div>
                <div className="social-platform">
                    <img src="/images/g3.png" alt="service1" />
                </div>

            </div>
        </>
    )
}

export default FashionCommunity;