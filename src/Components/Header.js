import React from "react";

let Header = () => {

    return (
        <>
            <div className="header-wrapper box-border relative	 block h-[300px] lg:h-[740px] md:h-[650px] sm:h-[500px]   sm:mb-[180px] md:mb-[180px] lg:mb-[180px]">
                <div className=" h-[300px] lg:h-[740px] md:h-[650] sm:h-[450px]  bg-[#6A5B40]">
                    <p className="logo text-white lg:text-[33px] sm:text-[26px] text-[16px] ml-[30px]  pt-2 sm:ml-20 sm:pt-2 ">Logo</p>

                    <div className="header">
                        <p className="title pt-4 lg:text-[52px] md:text-[36px] sm:text-[32px] text-[20px] text-center text-white">Create an order
                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[20px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> Lynk and share it</span><br />

                            <span className="sub-title lg:text-[52px] sm:text-[32px] text-[20px] text-center
                             text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> any where </span>in the Town</p>
                    </div>
                </div>

               
                <div className="phone flex justify-center mx-[10%] sm:mx-[15%]  absolute -mt-[160px] sm:-mt-[200px] md:-mt-[240px] lg:-mt-[440px] mb-[100px] gap-8 sm:gap-14 lg:gap-34">
                    <div className="mt-[40px] sm:mt-[60px] ">
                        <img src="/images/mobile1.png" className="" alt="service1" />
                    </div>
                    <div className="mobile2-img mt-[20px]">
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