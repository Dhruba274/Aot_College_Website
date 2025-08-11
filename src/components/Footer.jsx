import React from 'react';
import { NavLink } from 'react-router-dom';
import { GrFacebookOption, GrInstagram, GrLinkedin, GrYoutube } from "react-icons/gr";
import footerIcon from "../assets/AOT-Footer-Logo.png";
import "../index.css"

const Footer = () => {
  return (
  <footer className="bg-cover bg-center object-cover">
    <div className=" bg-[linear-gradient(to_right_bottom,rgba(45,38,83,0.3),rgba(65,54,255,0.6))] py-12">
      <div className="container mx-auto flex justify-center">
        <div className="footer-content w-full md:w-1/3 text-center">
          
          <div className=' flex flex-col items-center ml-5'>
          <img src={footerIcon} className='  mt-10 md:w-auto w-36'></img>
          <div className=' flex md:gap-8 gap-6 items-center'>
          <NavLink to={'https://www.facebook.com/share/MDk2eU5Zqm8zxMUQ/?mibextid=qi2Omg'} target='_blank' className=' text-white text-3xl hover:-translate-y-1 hover:text-[#0064d1] duration-200 '><GrFacebookOption/></NavLink>
          <NavLink to={'https://www.instagram.com/aotconnect?igsh=eXJmeTE3aHJtOWcz'} target='_blank' className=' text-white text-3xl hover:-translate-y-1 hover:text-[#d73676] duration-200 '><GrInstagram/></NavLink>
          <NavLink to={'https://www.linkedin.com/school/academy-of-technology/'} target='_blank' className=' text-white text-3xl hover:-translate-y-1 hover:text-[#0072b1] duration-200'><GrLinkedin/></NavLink>
          <NavLink to={'https://www.youtube.com/@academyoftechnology135'} target='_blank' className=' text-white text-[32px] hover:-translate-y-1 hover:text-[#cd201f] duration-200'><GrYoutube/></NavLink>
          </div>
        </div>
        </div>
        <div className="footer-content w-full md:w-2/3 text-center lg:mx-[5%] mx-0">
          <h2 className='text-white text-2xl font-semibold mb-4 font-[headline]'>Quick Links</h2>
          <ul className="text-white text-lg font-semibold flex flex-col md:flex-row justify-between">
          <ul>
          <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"/"}>Home</NavLink></li>
          <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"/Faculties"}>Faculties</NavLink></li>
          </ul>
          <ul>
          <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"/Academics"}>Academics</NavLink></li>
          <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"https://aot.edu.in/location/"}>Maps & Directions</NavLink></li>
          </ul>
            
            <ul>
            <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"/Students"}>Students</NavLink></li>
            <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"https://aot.edu.in/career-aot/"}>Jobs</NavLink></li>
            </ul>
           <ul>
           <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"/Research"}>Research</NavLink></li>
            <li className="mb-2 hover:translate-x-2 duration-200 font-[para]"><NavLink to={"https://aot.edu.in/contact-us/"}>Contact us</NavLink></li>
           </ul>
            
          </ul>
          
        </div>
        
      </div>
      <div className="bottom-bar bg-yellow-500 text-center py-4 mt-4">
        <p className="text-gray-800 lg:text-lg lg:font-semibold text-sm md:font-normal font-thin">&copy; 2024 Academy Of Technology Team. All rights reserved.</p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
