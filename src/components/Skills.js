import React from "react";

const Skills = () => {
  return (
    <>
      <div name="skills" className="w-full h-screen  bg-[#2a2b2b] z-0">
        <div className="max-w-[1368px] w-full h-full flex flex-col items-center justify-center">
          <div className="">
            <p className="font-bold text-3xl border-b-4 border-red-500 inline text-white">
              Experience
            </p>
          </div>

          <div>
            <p className="py-4 text-xl  text-white">
             
              These are the Technologies, that i have used
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3  text-center py-2">


            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg  w-full h-full">
            <img src="/assets/html.png"  className="h-20 m-4 pl-12  " alt="" />
            
              <div
                className="radial-progress bg-black text-orange-500 hover:scale-125 duration-500"
                style={{ "--value": 95 }}
              >
                95%
              </div>
            </div>


            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg  w-full h-full">
            <img src="/assets/css.png"  className="h-20 m-4 pl-12  " alt="" />
              <div
                className="radial-progress bg-black text-blue-500 hover:scale-125 duration-500"
                style={{ "--value": 90 }}
              >
                90%
              </div>
            </div>



            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg  w-full h-full ">
            <img src="/assets/javascript.png"  className="h-20 m-4 pl-12  " alt="" />
              <div
                className="radial-progress bg-black text-yellow-500 hover:scale-125 duration-500"
                style={{ "--value": 65 }}
              >
                65%
              </div>
            </div>



            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg  w-full h-full ">
            <img src="/assets/react.png"  className="h-20 m-4 pl-12  " alt="" />
              <div
                className="radial-progress bg-black text-cyan-500 hover:scale-125 duration-500"
                style={{ "--value": 75 }}
              >
                75%
              </div>
            </div>

            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg  w-full h-full">
            <img src="/assets/tailwind.png"  className="h-20 m-4 pl-12  " alt="" />
              <div
                className="radial-progress bg-black text-green-500 hover:scale-125 duration-500"
                style={{ "--value": 88 }}
              >
                88%
              </div>
            </div>

            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg  w-full h-full">
            <img src="/assets/github.png"  className="h-20 m-4 pl-12  " alt="" />
              <div
                className="radial-progress bg-black text-green-500 hover:scale-125 duration-500"
                style={{ "--value":40  }}
              >
                40%
              </div>
            </div>

          




          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
