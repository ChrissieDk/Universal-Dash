import React from 'react'
import { datas } from "../SidebarContent"

// enable toggle function

const SidebarIcons = ({toggle}) => {
  return (
    <div className="">
      {/* map through data.jsx and return div element that has a classname that depends on the value of the "toggle" prop */}
        {datas.map(data => {
            return(
                <div className={`${toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"} 
                sidebar last:absolute left-4 bottom-4` }
                key={data.id}
                >
                    <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
                    <div className={`${toggle ? "opacity-0 delay-200" : ""} text-[1rem] text-brown whitespace-pre-wrap`}>{data.text}</div>
                </div>
            )
        })}
    </div>
  )
}

export default SidebarIcons;
