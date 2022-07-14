import React from "react";
/* import Service from "../images/service1.png"; */

let Services = () => {
    return (
        <>

            <p className="title text-center  text-[#6A5B40] tracking-wide mb-6 mt-[260px]">Let’s see how it works</p>

            <div className="Services-wrapper">
                <div className="services">
                    <div className="service grid place-content-center">
                        <img src="/images/service1.png" alt="service1" />
                    </div>
                    <div className="service-description text-center">
                        <h3>Add no of orders</h3>
                    </div>
                </div>

                <div className="services">
                    <div className="service grid place-content-center">
                        <img src="/images/service2.png" alt="service1" />
                    </div>
                    <div className="service-description text-center">
                        <h3>Add Product details</h3>
                    </div>
                </div>

                <div className="services">
                    <div className="service grid place-content-center">
                        <img src="/images/service3.png" alt="service1" />
                    </div>
                    <div className="service-description text-center">
                        <h3>Create link and share</h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Services;