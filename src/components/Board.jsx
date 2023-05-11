import React from "react";
import Xicon from "./Icons/Xicon";
import Oicon from "./Icons/Oicon";
import ReLoad from "./Icons/ReLoad";
import GameComponent from "./GameComponent";
// import red from './'
// import { handleStart } from "../App";
const handleStart = () => console.log("Hello World");
function CardHeader() {
  console.log("Hello");
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center ">
        <Xicon size="sm" />
        <Oicon size="sm" />
      </div>
      <div className="card board__turn flex  active:translate-y-1  cursor-pointer flex-row justify-center items-center gap-1">
        {/* {Turn  X } */}
        <Xicon size="sm" color="dark" />
        <span className=" text-white"> Turn</span>
      </div>
      <button
        class="board__restart bg-gray-200 text-primary active:rotate-2 flex justify-center p-2 rounded-md
        "
      >
        <ReLoad size="sm" />
        {/* <span class="sr-only">Icon description</span> */}
      </button>
    </div>
  );
}
function Board() {
  const squeries = ["", "x", "o", "", "x", "o", "", "x", "o"];
  return (
    <div className="flex  p-3 flex-col  m-auto h-[100vh]  justify-center items-center w-full">
      <div
        className="flex-col max-w-[480px] flex overflow-hidden justify-around  sm:min-h-[90%] min-h-[100%]  
         "
      >
        {/* Card Board Header  */}
        <CardHeader />
        <div className="grid grid-cols-3 gap-4">
          {squeries.map((el, index) => (
            <GameComponent
              key={index}
              index={index}
              user={el}
              active={index == 5}
            />
          ))}
        </div>
        <div className="flex flex-col  justify-around sm:h-[150px]">
          <button
            className="btn btn-yellow w-full"
            onClick={() => handleStart("cpu")}
          >
            new game (vs CPU)
          </button>
          <button
            className="btn btn-blue w-full"
            onClick={() => handleStart("user")}
          >
            {" "}
            new game (vs Player)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
