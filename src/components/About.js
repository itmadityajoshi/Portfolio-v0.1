import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className="w-full h-screen bg-[#2a2b2b]  text-white">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1368px] w-full grid grid-cols-2  gap-4">
            <div className="sm:text-right pb-4 pl-4 mb-5 ">
              <p className="font-bold text-4xl inline border-b-4 border-red-500">
                About me
              </p>
            </div>

            <div></div>
          </div>

          <div className="max-w-[1368px] w-full grid sm:grid-cols-2 items-center gap-4 ">
            <div className="sm:text-right mx-auto">
              <img src="/assets/user1.JPG" className="w-56  ml-56 rounded-lg  shadow-xl shadow-black " alt="" />
            </div>

            <div>
              <p className="px-4 max-w-[400px]  text-xl">
                 <p className="font-bold text-2xl">  
                   Hi, I'm Aditya Joshi. Please look around me.
                  </p>
                <br />I am going to be a Fullstack Developer. Currently, attending MERN course at Dursikshya Training Center.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
