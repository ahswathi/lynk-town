import { useForm } from "react-hook-form";
import React, { useState } from "react";
let Form_copy = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    let [popup, setPopup] = useState(false);

    let handlePopUp = () => {
        setPopup(true);
    }
    let closePopUP = () => {
        setPopup(false);
    }

    return (
        <>
            <div className="flex justify-around relative items-center  flex-col sm:flex-row lg:flex-row ">

                <div className="flex flex-col justify-center lg:pt-5  ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center text-[#6A5B40]">
                        <input
                            type="text"
                            className={`form-control border bg-transparent border-[#6A5B40] mx-[40px] p-2 rounded-lg my-4  lg:w-[450px] sm-[200px] 
                            ${errors.name && "invalid"}`}
                            {...register("name", {
                                required: "Name is Required",
                                pattern: {
                                    value: /^[a-z ,.'-]+$/i,
                                    message: "Invalid Name",
                                }
                            })}

                            placeholder="Full name"

                            onKeyUp={() => {
                                trigger("name");
                            }}
                        />
                        {errors.name && (
                            <small className="text-danger ml-[40px]">{errors.name.message}</small>
                        )}

                        <input
                            type="text"
                            className={`form-control border bg-transparent border-[#6A5B40] mx-[40px] p-2 rounded-lg my-4 lg:w-[450px] sm-[200px] 
                            ${errors.email && "invalid"}`}
                            {...register("email", {
                                required: "Email is Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                }
                            })}

                            placeholder="Enter email id"

                            onKeyUp={() => {
                                trigger("email");
                            }}
                        />
                        {errors.email && (
                            <small className="text-danger ml-[40px]">{errors.email.message}</small>
                        )}

                        <input
                            type="text"
                            className={`form-control border bg-transparent border-[#6A5B40]  mx-[40px] p-2 rounded-lg my-4 lg:w-[450px]  sm-[200px] 
                            ${errors.phone && "invalid"}`}
                            {...register("phone", {
                                required: "Phone is Required",
                                pattern: {
                                    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                    message: "Invalid phone no",
                                },
                            })}
                            placeholder="Phone no"

                            onKeyUp={() => {
                                trigger("phone");
                            }}
                        />
                        {errors.phone && (
                            <small className="text-danger ml-[40px]">{errors.phone.message}</small>
                        )}

                        {/*  <input
                            onClick={handlePopUp}
                            type="submit"
                            className="text-center mx-[100px] my-3 bg-[#6A5B40] rounded-[160px] text-white h-[36px] w-[180px] "
                            value="Submit"
                        /> */}
                        <input onClick={handlePopUp}
                            className="text-center mx-[100px] my-3 bg-[#6A5B40] rounded-[160px] text-white h-[36px] w-[180px]"
                            value="Submit"
                        />
                        {

                            popup ?
                                <div className="bg-black h-screen w-screen  fixed left-0 right-0 top-0">
                                    <div className="grid grid-col w-[440px] h-[220px] bg-[]#EEECE7] border mx-auto absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
                                        <span className="pt-2 pr-2 justify-self-end font-semibold	" onClick={closePopUP}>X</span>
                                        <img src="/images/thanku.png" className="w-[120px] h-[120px] justify-self-center" />
                                        <span className="thankyou justify-self-center text-[24px] font-semibold	">Thank’s for contacting for us</span>
                                    </div>
                                </div> : " "
                        }
                    </form>
                </div>


                <div className="social-platform mt-10">
                    <img src="/images/carto-action.png" alt="service1" />
                </div>

            </div>
        </>
    );
}

export default Form_copy;
/* import React from "react";

let Form = () => {
    return (
        <>
            <form action="" className="flex flex-col text-[#3B3B3B] mx-[500px]">
                <input type="text" className="border p-2 rounded-lg my-2" placeholder="Full name" />
                <input type="email" className="border p-2 rounded-lg my-2" placeholder="Enter email id" />
                <input type="password" className="border p-2 rounded-lg my-2"  placeholder="Phone no" />
                <div className="btn-box">
                    <button type="button" className="bg-[#6A5B40] rounded-[160px] text-white h-[36px] w-[180px] mt-4">Submit</button>
                </div>
            </form>
            {
                
            }
        </>
    )
}
export default Form; */