import React from "react";

let Business = () => {
    return (
        <>
            <div className="flex justify-center  items-center font-medium
            h-[160px] lg:h-[360px] md:h-[280px] sm:h-[200px] bg-[#6A5B40]
            px-[40px] sm:px-[80px] lg:px-[150px] overflow-hidden">
                
                <div className="Business">
                <img src="/images/carto-action.png" className="lg:pt-[160px] md:pt-[140px] sm:pt-[140px] pt-[120px] " alt="service1" />
                </div>
                
                <div className="text-center text-[14px] sm:text-[22px] md:text-[28px] lg:text-[34px]">
                        <p>grow your onilne business with Lynk Town</p>
                        <a href="#" className="bg-[#EAE7E0] rounded-full text-[10px]
                        sm:text-[16px] md:text-[16px] lg:text-[20px] px-2">Download Link</a>
                </div>
            </div>
        </>
    )
}
export default Business;