import React from "react";
import Xicon from "./Icons/Xicon";
import Oicon from "./Icons/Oicon";
import ReLoad from "./Icons/ReLoad";
import GameComponent from "./GameComponent";
import Conter from "./Conter";
import { GameContext } from "./context/GameState";
import { useContext } from "react";

// import red from './'
// import { handleStart } from "../App";
const handleStart = () => console.log("Hello World");
// const conters = [{ title: "YOU", count: 3 }];
function CardHeader({ Xnext }) {
  // {}

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center ">
        <Xicon size="sm" />
        <Oicon size="sm" />
      </div>
      <div className="card board__turn flex  active:translate-y-1  cursor-pointer flex-row justify-center items-center gap-1">
        {/* {Turn  X } */}
        {Xnext ? (
          <Xicon size="sm" color="light" />
        ) : (
          <Oicon size="sm" color="light" />
        )}
        <span className=" text-white"> Turn</span>
      </div>
      <button
        className="board__restart bg-gray-200 text-primary active:rotate-2 flex justify-center p-2 rounded-md
        "
      >
        <ReLoad size="sm" />
        {/* <span className="sr-only">Icon description</span> */}
      </button>
    </div>
  );
}
function Board() {
  const { ChoseSquer, Squeres, Xnext, checkPlyear, Ties, showRestartModel } =
    useContext(GameContext);
  const squeries = Squeres; //["", "x", "o", "", "x", "o", "", "x", "o"];
  return (
    <div className="flex  p-3 flex-col  m-auto h-[100vh]  justify-center items-center w-full">
      <div
        className="flex-col max-w-[480px] flex overflow-hidden justify-around  sm:min-h-[80%] min-h-[100%]  
         "
      >
        {/* Card Board Header  */}
        <CardHeader Xnext={Xnext} showRestartModel={() => showRestartModel()} />
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
        {/* Counters Card  */}
        <div className="grid grid-cols-3 gap-4">
          <Conter
            title={checkPlyear("x")}
            count={Ties.x}
            style="bg-themeblue shadow-themeblue/70 "
          />
          <Conter
            title="Tie"
            count={!isNaN(Ties.o + Ties.x) ? Ties.o + Ties.x : 0}
            style="bg-themelight shadow-themelight/70"
          />
          <Conter
            title={checkPlyear("o")}
            count={Ties.o}
            style="bg-themeyello shadow-themeyello/70"
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
