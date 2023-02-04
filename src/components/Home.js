import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div name='home' className="w-full h-screen bg-[#2a2b2b]">

        {/* container */}
        <div className="max-w-[1000px] mx-auto text-white px-10 flex flex-col justify-center  h-full">
          <h1 className="text-4xl font-bold sm:text-4xl">
            I'M ADITYA JOSHI
          </h1>
          <p className="text-xl py-2 sm:text-3xl">WEB DEVELOPER.</p>
          <p className=" text-l sm:text-xl  max-w-[800px] py-3">
           
            I'm a MERN developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building responsive MERN web applications.
          </p>

          <div className=" py-4">
            <button className="group flex items-center border-2 h-12 px-2 hover:bg-red-600 hover:border-red-600 hover:text-black font-semibold">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight className="ml-2 text-lg" />
              </span>
            </button>
          </div>
        </div>
     
     </div>
     <div className="h-36 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2b2b"
            fill-opacity="1"
            d="M0,288L480,64L960,192L1440,32L1440,0L960,0L480,0L0,0Z"
          ></path>
        </svg>
        </div>
   
    </>
  );
};

export default Home;
