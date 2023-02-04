import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full  h-screen ">
        <div className=" w-full h-screen flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-5 max-w-[1000px] w-full justify-center items-center">
            <div className="sm:text-right pb-8 pl-8">
              <p className="text-3xl inline  font-bold border-b-4 border-red-600">
                About
              </p>
            </div>

            <div> </div>

          </div>

            <div className="grid sm:grid-cols-2 max-w-[1000px] w-full gap-5 px-4">
              <div className="sm:text-right  font-bold text-3xl">
               <p>Hi, I'm Aditya, nice to meet you. Please take a look around.</p>
              </div>

              <div> 
                <p className="">
                  I am passionate about building excellent software that
                  improves the lives of those around me. I specialize in
                  creating software for clients ranging from individuals and
                  small-business all the way to large enterprise corporations.
                  What would you do if you had a software expert avaiable at
                  your fingertips?
                </p>
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default About;
