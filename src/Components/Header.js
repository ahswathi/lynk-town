import React from "react";

let Header = () => {

    return (
        <>
            <div className="header-wrapper h-[360px] lg:h-[524px] md:h-[440px] sm:h-[420px]  sm:mb-[180px] md:mb-[180px]  ">
                <div className="header-main w-full h-[300px] lg:h-[724px] md:h-[540px] sm:h-[420px] bg-[#6A5B40]">
                        <p className="logo text-white lg:text-[33px] sm:text-[26px] text-[16px] ml-[30px]  pt-2 sm:ml-20 sm:pt-2 ">Logo</p>

                        <p className="title pt-4 lg:text-[52px] md:text-[36px] sm:text-[32px] text-[22px] text-center text-white">Create an order
                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[22px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> Lynk and share it</span><br />

                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[22px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> any where </span>in the Town</p>
                </div>

                <div className="phone flex justify-around  h-auto
                     mt-[140px] sm:mt-[160px] md:mt-[200px] lg:mt-[280px] 
                     mx-[50px] sm:mx-[100px] lg:mx-[120px] 
                     gap-8 sm:gap-14 lg:gap-34">
                    <div className="mt-[40px]  sm:mt-[60px] ">
                        <img src="/images/mobile1.png" className="" alt="service1" />
                    </div>
                    <div className="mobile2-img  mt-[20px]">
                        <img src="/images/mobile2.png" alt="service1" />
                    </div>
                    <div className="mt-[40px] sm:mt-[60px] ">
                        <img src="/images/mobile3.png" alt="service1" />
                    </div>
                </div>
            </div>

        </>
    )

}

export default Header;