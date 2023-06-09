import React from "react";
import Xicon from "./Icons/Xicon";
import { useContext } from "react";
import "animate.css";
import { ModalState, ModalContext } from "./context/ModalState";
import { GameContext } from "./context/GameState";
import Oicon from "./Icons/Oicon";

const Ok = () => null;
export default function Win() {
  const { Win, showWinModel, colseWinModal } = useContext(ModalContext);

  const { Winner, setSqueres, Xnext } = useContext(GameContext);
  console.log(Winner, showWinModel, colseWinModal);
  return Win ? (
    <div
      className="absolute  top-0 left-0
      flex justify-center items-center
      bg-black bg-opacity-50 z-[1] w-[100%] h-[100%] 
       "
    >
      {/* Win Modal Components  */}
      <div className="w-full p-10  animate__animated animate__bounce  bg-primary">
        <div className=" flex flex-col justify-center items-center max-w-[480px] m-auto">
          <h3>You Win </h3>
          <div className="flex flex-row  my-5 justify-center items-center">
            {console.log(Winner, "sa")}
            {Winner === "x" ? <Xicon size="sm" /> : <Oicon size="sm" />}
            <h1 className="text-2xl   font-extrabold ml-3"> take The Round </h1>
          </div>
          <div className="flex flex-row justify-around items-center">
            <button
              className="btn btn-yellow m-2"
              onClick={() => colseWinModal()}
            >
              Quit
            </button>
            <button
              className="btn btn-blue m-2"
              onClick={() => {
                setSqueres(new Array(9).fill(""));
                colseWinModal();
              }}
            >
              {" "}
              Next Round
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  ) : (
    <></>
  );
}
