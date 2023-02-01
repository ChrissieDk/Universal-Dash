import React from 'react';
import { useState } from 'react';
import { BiChevronLeft } from "react-icons/bi"
import SidebarIcons from './components/SidebarIcons';
import UserProfile from './components/UserProfile';

const Sidebar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container z-10 bg-slate-50 border border-slate-200`}>
      {/* import userprofile and sidebaricons with toggle applied */}
      <UserProfile toggle={toggle}/>
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
    </div>
  )
}

export default Sidebar;
