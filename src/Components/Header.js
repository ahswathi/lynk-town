import React from "react";

let Header = () => {

    return (
        <>
            <div className="header-wrapper  mx-auto w-screen">
                <div className="max-h-[210px] lg:max-h-[724px] sm:max-h-[420px] bg-[#6A5B40]">
                    <p className="logo text-white lg:text-[33px] sm:text-[26px] text-[16px] ml-36 pt-4 sm:ml-20 sm:pt-2 ">Logo</p>
                    <div className="header">
                        <p className="title lg:text-[52px] sm:text-[32px] text-[12px] text-center text-white">Create an order
                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[12px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> Lynk and share it</span><br />
                            
                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[12px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> any where </span>in the Town</p>
                    </div>
                     <div className="flex justify-around mt-[40px]  sm:mt-[60px] md:mt-[60px]   sm:mt-[60px] lg:mt-[80px] mx-[80px] sm:mx-[100px] lg:mx-[120px] gap-8 sm:gap-14 lg:gap-34">
                        <div className="mt-[20px] sm:mt-[60px] sm:mt-[80px]">
                            <img src="/images/mobile1.png" className="w-full" alt="service1" />
                        </div>
                        <div className="mobile2-img">
                            <img src="/images/mobile2.png" alt="service1" />
                        </div>
                        <div className="mt-[20px] sm:mt-[60px] sm:mt-[80px]">
                            <img src="/images/mobile3.png" alt="service1" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}

export default Header;