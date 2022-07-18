import { useForm } from "react-hook-form";

let Form = () => {
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


    return (
        <>
            <div className="flex justify-around items-center  flex-col sm:flex-row lg:flex-row ">

                <div className="flex flex-col  sm:justify-center items-center lg:pt-5  ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center text-[#6A5B40]">
                        <input
                            type="text"
                            className={`form-control border bg-transparent border-[#6A5B40]  p-2 rounded-lg my-4  lg:w-[450px] sm:w-[90%] w-[100%] 
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
                            className={`form-control border bg-transparent border-[#6A5B40]  p-2 rounded-lg my-4 lg:w-[450px] sm:w-[90%] w-[100%]
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
                            className={`form-control border bg-transparent border-[#6A5B40]   p-2 rounded-lg my-4 lg:w-[450px]  sm:w-[90%] w-[100%]
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

                        <input

                            type="submit"
                            className="text-center mx-[100px] my-3 bg-[#6A5B40] rounded-[160px] text-white h-[36px] w-[180px] "
                            value="Submit"
                        />
                    </form>
                </div>


               {/*  <div className="social-platform mt-10">
                    <img src="/images/carto-action.png" alt="service1" />
                </div> */}

            </div>
        </>
    );
}

export default Form;
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