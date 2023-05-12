import React from "react";
import Xicon from "./Icons/Xicon";
import Oicon from "./Icons/Oicon";

function Conter({ title, style, count = 0 }) {
  return (
    <div
      className={`card rounded-md flex flex-col  board__turn_2
       justify-center items-center w-[100px] 
       h-[80px] ${style}  text-white shadow-md
       
    `}
    >
      <p>{title}</p>
      <p className="p-1 font-extrabold ">{count}</p>
    </div>
  );
}

export default Conter;
