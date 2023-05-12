import { createContext, useState, useContext } from "react";
import { ModalContext } from "./ModalState";
import { calcWinner } from "./HelpersClacSquer";

export const GameContext = createContext();

function GameState({ children }) {
  const { showWinModel } = useContext(ModalContext);

  const [is_start, setIs_start] = useState(false);
  const [Player, setPlayer] = useState("x");
  const [Xnext, setXnext] = useState(true);
  const [PalyerMode, setPalyerMode] = useState("cup");
  const [Squeres, setSqueres] = useState(new Array(9).fill(""));
  const [Line, setLine] = useState([]);
  const [Winner, setWinner] = useState("");
  const [Ties, setTies] = useState({ x: 0, y: 0 });
  // alert(is_start);
  // console.log(Squers);
  const HandlClick = () => {};
  const ChosePalyerMode = (parm) => {
    setPalyerMode(parm);
    console.log("Hello");
    setIs_start(true);
  };
  const ChoseSquer = (index) => {
    console.log("Hello From There");
    if (PalyerMode === "cup" && Player === next) return;
    const next = Xnext ? "x" : "o";
    const sq = Squeres;
    sq[index] = next;
    setXnext(!Xnext);
    setSqueres(sq);
    CheckTheWinner(sq);
  };

  const CheckTheWinner = (squers) => {
    const is_winner = calcWinner(squers);
    console.log(is_winner);
    if (!is_winner) return;
    setWinner(is_winner.winner);
    setLine(is_winner.Line);
    showWinModel();
    Ties[is_winner.winner] = Ties[is_winner.winner] + 1;
    setTies(Ties);
  };

  return (
    <GameContext.Provider
      value={{
        is_start,
        Player,
        setIs_start,
        setPlayer,
        ChosePalyerMode,
        ChoseSquer,
        setSqueres,
        Squeres,
        Xnext,
        Ties,
      }}
    >
      {/*  */}
      {children}
    </GameContext.Provider>
  );
}

export default GameState;
