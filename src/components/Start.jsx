import React, { useContext } from "react";
import Xicon from "./Icons/Xicon";
import Oicon from "./Icons/Oicon";
import { GameContext } from "./context/GameState";
// import { handleStart } from "../App";
const handleStart = () => console.log("Hello World");

function Start() {
  const { is_start, setIs_start, Player, ChosePalyerMode, setPlayer } =
    useContext(GameContext);
  return (
    <div className="flex  p-3 flex-col  m-auto h-[100vh]  justify-center items-center w-full">
      <div
        className="flex-col max-w-[480px] flex overflow-hidden justify-around  sm:min-h-[75%] min-h-[90%]  
         "
      >
        <div className="flex flex-row justify-center">
          <Xicon />
          <Oicon />
        </div>
        <div className="card dark:border-gray-700 block min-w-[480px] p-6 bg-primary border border-primary-200 rounded-[20px] shadow  dark:bg-gray-800  dark:hover:bg-gray-700">
          <h3 className="font-mono text-3xl font-extrabold ">
            {" "}
            Pick Players Its Mark
          </h3>
          {/* X O Part */}
          <div className="card mx-11 my-5 palyers_btn bg-light flex  flex-row rounded-[10px] p-3">
            <span
              className={`flex-1 rounded-[10px] p-3  transition-all  ${
                Player === "x" ? "active" : ""
              }`}
              onClick={() => setPlayer("x")}
            >
              {" "}
              <Xicon color="dark" />
            </span>
            <span
              className={`flex-1 rounded-[10px] transition-all  p-3 ${
                Player === "o" ? "active" : ""
              }`}
              onClick={() => setPlayer("o")}
            >
              <Oicon color="dark" />
            </span>
          </div>
          <h6 className="text-grey"> Rembers X Code Firest </h6>
        </div>
        <div className="flex flex-col justify-around sm:h-[150px]">
          <button
            className="btn btn-yellow w-full"
            onClick={() => ChosePalyerMode("cup")}
          >
            new game (vs CPU)
          </button>
          <button
            className="btn btn-blue w-full"
            onClick={() => ChosePalyerMode("user")}
          >
            {" "}
            new game (vs Player)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
