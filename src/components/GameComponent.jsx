import React from "react";
import Xicon from "./Icons/Xicon";
import Oicon from "./Icons/Oicon";

function GameComponent({ user, index, active }) {
  return (
    <div
      className={`card flex  board__turn justify-center items-center w-[100px] h-[100px] bg-praimry
    ${active && user == "x" && "active shadow-blue"}
    ${active && user == "o" && "active shadow-yellow"}
    ${!active && "shadow-gray"}
    `}
    >
      {user == "x" ? <Xicon color={active && "dark"} /> : ""}
      {user == "o" ? <Oicon color={active && "dark"} /> : ""}
    </div>
  );
}

export default GameComponent;
