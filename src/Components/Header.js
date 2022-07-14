import React from "react";

let Header = () => {

    return (
        <>
            <div className="header-wrapper">
                <div className="banner h-[824px] bg-[#6A5B40]">
                    <p className="logo text-white ml-36 pt-4">Logo</p>
                    <div className="header">
                        <p className="title text-center text-white tracking-wide">Create an order
                            <span className="sub-title tracking-wide"> Lynk and share it</span><br />
                            <span className="sub-title tracking-wide"> any where </span>in the Town</p>
                    </div>
                    <div className="mobile-img-wrapper">
                        <div className="mobile1-img">
                            <img src="/images/mobile1.png" alt="service1" />
                        </div>
                        <div className="mobile2-img">
                            <img src="/images/mobile2.png" alt="service1" />
                        </div>
                        <div className="mobile3-img">
                            <img src="/images/mobile3.png" alt="service1" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}

export default Header;