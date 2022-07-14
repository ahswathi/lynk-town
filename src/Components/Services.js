import React from "react";
/* import Service from "../images/service1.png"; */

let Services = () => {
    return (
        <>
        
            <p /* className="title text-center text-white tracking-wide" */>Let’s see how it works</p>

            <div className="Services-wrapper">
                <div className="service">
                   {/*  <img src={Service} alt="service1" /> */}
                    <h3>Add no of orders</h3>
                </div>
                <div className="service">
                    <img src="/images/service2.png" alt="service2" />
                    <h3>Add Product details</h3>
                </div>
                <div className="service">
                    <img src="service3.png" alt="service3" />
                    <h3>Create link and share</h3>
                </div>
            </div>
        </>

    )
}

export default Services;