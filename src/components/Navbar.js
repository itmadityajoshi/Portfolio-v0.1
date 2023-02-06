import React,{useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {CiMail} from 'react-icons/ci'
import {BsPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {

     const [nav, setNav] = useState(false)
     const hadnleClick =()=> setNav(!nav)



  return (
    <>
      <div className="fixed z-10 w-full h-[80px] bg-[#2a2b2b] text-white flex justify-between items-center">
        <div className="">
        <img src="" alt="logo image" />
        </div>

        {/* menu */}

        <div>
          <ul className="hidden md:flex mx-10 ">
            <li>Home </li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* hamburger */}
        <div onClick={hadnleClick} className=" md:hidden z-10 px-4">
            { !nav ? <FaBars className="text-white"/> : <FaTimes className="text-white"/>}
        </div>
        {/* mobile menu */}
        <div className={ !nav ? 'hidden' : ' text-white absolute top-0 left-0 w-full h-screen bg-[#27292b] flex  flex-col items-center justify-center'} >
            <li className="py-6 text-4xl ">Home </li>
            <li className="py-6 text-4xl ">About</li>
            <li className="py-6 text-4xl ">Skills</li>
            <li className="py-6 text-4xl ">Work</li>
            <li className="py-6 text-4xl ">Contact</li>
        </div>


        {/* Social Icons */}


        <div className=" hidden lg:flex flex-col fixed top-64 left-0 ">
          <ul>
            <li className="w-[120px] h-[50px] bg-blue-600 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a className="flex justify-between  items-center  w-full " href="#">Linkedin <FaLinkedinIn/> </a>
            </li>

            <li className="w-[120px] h-[50px] bg-gray-500 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a className="flex justify-between  items-center  w-full " href="#">Github <FaGithub/> </a>
            </li>

            <li className="w-[120px] h-[50px] bg-green-400 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a className="flex justify-between  items-center  w-full " href="#">Mail <CiMail/> </a>
            </li>

            <li className="w-[120px] h-[50px] bg-indigo-500 flex items-center ml-[-80px] hover:ml-[-5px] duration-300">
              <a className="flex justify-between  items-center  w-full " href="#">Resume <BsPersonLinesFill/> </a>
            </li>

          </ul>


        </div>




      </div>
    </>
  );
};

export default Navbar;
