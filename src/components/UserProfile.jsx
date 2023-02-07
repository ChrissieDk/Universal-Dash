import React from 'react'
import user from "../assets/user.png"

// User info to be displayed ie photo, email, name with styling applied

const UserProfile = ({toggle}) => {
  return (
    <div className={`flex gap-5 items-center ${
        toggle 
        ? "bg-none transition-all duration-300 delay-200" 
        : "bg-slate-100 rounded-xl p-2"}`}>

        <div className="min-w-[3,5rem] h-[3.5rem]">
            <img src={user} 
            alt="" 
            className="w-full h-full rounded-full object-cover"
            />
        </div>
        <div className={toggle ? "opacity-0 delay-200" : ""}>
            <h3 className='text-xl'>Christiaan de Kock</h3>
            <span className='text-[0.75rem] opacity-100'>christiaandk96@gmail.com</span>
        </div>
    </div>
  );
};

export default UserProfile;
