import React from "react";

const Skills = () => {
  return (
    <>
      <div name="skills" className="w-full h-screen  bg-[#2a2b2b] -z-0">
        <div className="max-w-[1368px] w-full h-full flex flex-col items-center justify-center">
          <div>
            <p className="font-bold text-3xl border-b-4 border-red-500 inline text-white">
              Experience
            </p>
          </div>

          <div>
            <p className="py-4 text-xl  text-white">
             
              These are the Technologies, that i have used
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-2">


            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg bg-slate-300 w-full h-full">
              <h1 className="p-2 text-2xl font-bold ">HTML </h1>
              <div
                className="radial-progress bg-black text-orange-500 hover:scale-125 duration-500"
                style={{ "--value": 95 }}
              >
                95%
              </div>
            </div>


            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg bg-slate-300 w-full h-full">
              <h1 className="p-2 text-2xl font-bold ">CSS</h1>
              <div
                className="radial-progress bg-black text-blue-500 hover:scale-125 duration-500"
                style={{ "--value": 90 }}
              >
                90%
              </div>
            </div>



            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg bg-slate-300 w-full h-full ">
              <h1 className="p-2 text-2xl font-bold ">Javascript </h1>
              <div
                className="radial-progress bg-black text-yellow-500 hover:scale-125 duration-500"
                style={{ "--value": 65 }}
              >
                65%
              </div>
            </div>



            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg bg-slate-300 w-full h-full ">
              <h1 className="p-2 text-2xl font-bold ">Reactjs</h1>
              <div
                className="radial-progress bg-black text-cyan-500 hover:scale-125 duration-500"
                style={{ "--value": 75 }}
              >
                75%
              </div>
            </div>

            <div className="mx-4 text-center shadow-lg  py-4 rounded-lg bg-slate-300 w-full h-full">
              <h1 className="p-2 text-2xl font-bold ">Tailwind css</h1>
              <div
                className="radial-progress bg-black text-green-500 hover:scale-125 duration-500"
                style={{ "--value": 88 }}
              >
                88%
              </div>
            </div>

          




          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
