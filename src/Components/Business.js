import React from "react";

let Business = () => {
    return (
        <>
            <div className="flex justify-center  items-center font-medium
            max-h-[200px] lg:max-h-[440px] md:max-h-[400px] sm:max-h-[360px] bg-[#6A5B40]
            px-[20px] sm:px-[80px] lg:px-[150px] ">
                
                <div className="Business">
                <img src="/images/carto-action.png" className="pt-[40px]" alt="service1" />
                </div>
                
                <div className="text-center text-[20px] sm:text-[28px] md:text-[40px] lg:text-[40px]">
                        <p>grow your onilne business with Lynk Town</p>
                        <a href="#" className="bg-[#EAE7E0] rounded-full text-[12px]
                        sm:text-[16px] md:text-[20px] lg:text-[20px] px-2">Download Link</a>
                </div>
            </div>
        </>
    )
}
export default Business;