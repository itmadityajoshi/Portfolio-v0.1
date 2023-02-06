import React from "react";

const About = () => {
  return (
    <>
      <div name='about' className="w-full h-screen text-gray">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1368px] w-full grid grid-cols-2  gap-4">
            <div className="sm:text-right pb-4 pl-4 ">
              <p className="font-bold text-3xl inline border-b-4 border-red-500">
                About
              </p>
            </div>

            <div></div>
          </div>

          <div className="max-w-[1368px] w-full grid sm:grid-cols-2 items-center gap-4">

            <div className="sm:text-right">
              <p className="px-4 ">Hi, I'm Aditya Joshi. Please look around me.</p>
            </div>

            <div>
              <p className="px-4 ">
                I am going to be a Fullstack Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
