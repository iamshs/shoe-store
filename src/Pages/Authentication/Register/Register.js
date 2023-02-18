import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className=" lg:min-h-[100vh]  min-h-[70vh] bg-[#F9FAFB] grid place-content-center ">
        <div className="bg-white lg:p-[2rem] md:p-[2rem] p-[1rem] rounded-[.75rem] w-[350px] md:w-[528px] lg:w-[600px] shadow-lg border-[1px] border-[#dbdbdb]">
          <header className="flex items-center justify-between">
            <h1 className="lg:text-[1.6rem] text-[1.1rem] md:text-[1.4rem] font-semibold">
              Sign Up
            </h1>
            <p className="text-sm lg:[text-1.2rem] md:text-[1.1rem] ">
              Already have an account?
              <Link className="font-semibold" to="/login">
                Login
              </Link>
            </p>
          </header>
          <form onSubmit={handleSubmit(handleSignUp)} className="mt-[2.5rem]">
            {/* <label
              className="text-[1rem] text-[#18181B] font-[400]"
              htmlFor="email"
            >
              Full Name
            </label> */}
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full border-[1px] border-[#A1A1AA] lg:h-[3.8rem] h-[2.8rem]  
                     lg:rounded-[0.7rem] md:rounded-[0.6rem] md:h-[3.5rem] rounded-[0.5rem] my-2 mb-1 lg:text-[1.2rem] text-[1rem] p-4"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message} </p>
            )}
            {/* <label
              className="text-[1rem] text-[#18181B] font-[400]"
              htmlFor="email"
            >
              Email
            </label> */}
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border-[1px] border-[#A1A1AA] lg:h-[3.8rem] h-[2.8rem]  
                     lg:rounded-[0.7rem] md:rounded-[0.6rem] md:h-[3.5rem] rounded-[0.5rem] my-4 mb-1 lg:text-[1.2rem] text-[1rem] p-4"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message} </p>
            )}
            {/* <label
              className="text-[1rem] text-[#18181B] font-[400]"
              htmlFor="password"
            >
              Password
            </label> */}
            <input
              className="w-full border-[1px] border-[#A1A1AA]  h-[2.8rem]  
                     lg:rounded-[0.7rem] md:rounded-[0.6rem] md:h-[3.5rem] rounded-[0.5rem] 
                     lg:h-[3.8rem] my-2 mb-1 lg:text-[1.2rem] text-[1rem] p-4"
              type="password"
              id="password"
              placeholder="Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be minimum 6 character",
                },
                pattern : {
                  value : /(?=.*[A-Z])/,
                  message: "Password should contain at least one uppercase"       
                }
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message} </p>
            )}
            <button
              className="mt-4 mb-3 text-[1rem] font-semibold hover:bg-black bg-[#18181B] w-full lg:p-[1.2rem] p-[0.85rem]
                      md:p-[1.1rem] text-white rounded-[0.7rem] "
            >
              {/* {loading ? <Spinner size={20} /> : "Sign in"} */}
              Sign up
            </button>
            <Divider />
            <button
              className="mt-3 text-[1rem] font-semibold bg-[#ffffff] w-full lg:p-[1.04rem] p-[0.85rem]
                      md:p-[1.1rem] text-black rounded-[0.7rem] hover:bg-[#18181B] hover:text-white border-2 border-black "
            >
              {/* {loading ? <Spinner size={20} /> : "Sign in"} */}
              Continue with google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
