import React from "react";

let Examp = () => {

    return (
        <>

            <div className="border-black h-auto sm:h-auto md:h-auto lg:h-auto overflow-auto">
                <div className="border-black h-[320px] sm:h-[420px] md:h-[680px]  lg:h-[740px] bg-[#6A5B40]">
                    <p className="logo text-white lg:text-[33px] sm:text-[26px] text-[20px] ml-[30px]  pt-2 sm:ml-20 sm:pt-2 ">Logo</p>

                    <p className="title pt-4 lg:text-[52px] md:text-[36px] sm:text-[32px] text-[20px] text-center text-white">Create an order
                        <span className="sub-title lg:text-[52px] sm:text-[32px] text-[20px] text-center
     text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> Lynk and share it</span><br />

                        <span className="sub-title lg:text-[52px] sm:text-[32px] text-[20px] text-center
     text-[#6A5B40] rounded-full bg-[#EAE7E0] px-1 mx-1"> any where </span>in the Town</p>
                </div>

                <div className="border-black h-auto flex justify-around
                        mt-[-160px] sm:mt-[-220px] md:mt-[-420px] lg:mt-[-420px] mx-[50px] sm:mx-[100px] lg:mx-[120px] 
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

export default Examp;