import React from 'react';
import { useState } from 'react';
import { BiChevronLeft } from "react-icons/bi"
import SidebarIcons from './components/SidebarIcons';
// import UserProfile from './components/UserProfile';
import { useLocation } from 'react-router-dom';
import { BiMenuAltLeft } from "react-icons/bi"

const Sidebar = () => {
  const [toggle, setToggle] = useState(true)
  const location = useLocation()
  const isLoginPage = location.pathname === '/Login';
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };


  return (
    <>
    <button
        className="lg:hidden"
        onClick={toggleBurgerMenu}
      >
        <BiMenuAltLeft 
        className='text-5xl font-thin fixed top-0 my-3 mx-3 border rounded-xl border-slate-300'/>
      </button>

      <div className={`hidden md:block ${toggle ? "w-[5.8rem]" : ""}
        lg:hidden sidebar-container z-10 bg-slate-50 border border-slate-200
        ${isLoginPage ? 'hidden' : ''}`}
      ></div>
    <div className={`${toggle ? "w-[5.8rem]" : ""} 
      hidden lg:block sidebar-container z-10 bg-slate-50 border border-slate-200
      ${isLoginPage ? 'hidden' : ''}`}
      
    >
    
      {/* import userprofile and sidebaricons with toggle applied */}
      {/* <UserProfile toggle={toggle}/> */}
      <SidebarIcons toggle={toggle}/>
      <div 
      className="absolute top-[7rem] flex justify-center 
      items-center -left-5 w-10 h-10 bg-slate-50 rounded-full 
      cursor-pointer border border-slate-200" 

      // changes state of toggle from "false" to "true" and vice versa
      onClick={() =>  {
        setToggle(!toggle)
      }}
      >
      {/* Enables toggle icon to rotate on click */}
        <BiChevronLeft
         className={`${
          toggle ? "rotate-180" : ""} text-3xl transition-all duration-300`} />
      </div>
      <div className={`lg:hidden ${isBurgerMenuOpen ? 'block' : 'hidden'}`}>
        {/* burger menu content */}
        <div className='fixed top-11 my-4 mx-10 h-[93%] border rounded-lg bg-slate-50'>
        <SidebarIcons />
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar;
