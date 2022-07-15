import React from "react";
/* import Service from "../images/service1.png"; */

let Services = () => {
    return (
        <>

            <p className="title lg:text-[52px] sm:text-[32px] text-[22px] text-center  text-[#6A5B40] mt-[100px] sm:mt-[220px] md:mt-[360px] lg:mt-[260px]">Let’s see how it works</p>

            <div className="flex flex-col justify-around mx-[40px] sm:flex-col md:flex-row lg:flex-row">
                <div className="services">
                    <div className="service grid place-content-center">
                        <img src="/images/service1.png" className="w-full h-full" alt="service1" />
                    </div>
                    <div className="service-description text-[15px] sm:text-[25px] lg:text-[35px] text-center">
                        <h3>Add no of orders</h3>
                    </div>
                </div>

                <div className="services">
                    <div className="service grid place-content-center">
                        <img src="/images/service2.png" className="w-full h-full" alt="service1" />
                    </div>
                    <div className="service-description text-[15px] sm:text-[25px] lg:text-[35px] text-center">
                        <h3>Add Product details</h3>
                    </div>
                </div>

                <div className="services">
                    <div className="service grid place-content-center">
                        <img src="/images/service3.png" className="w-full h-full" alt="service1" />
                    </div>
                    <div className="service-description text-[15px] sm:text-[25px] lg:text-[35px] text-center">
                        <h3>Create link and share</h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Services;