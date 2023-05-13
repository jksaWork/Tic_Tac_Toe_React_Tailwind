import { createContext, useState, useContext, useEffect } from "react";
import { ModalContext } from "./ModalState";
import { calcWinner, calcBestMove } from "./HelpersClacSquer";

export const GameContext = createContext();

function GameState({ children }) {
  const { showWinModel, showRestartModel } = useContext(ModalContext);

  const [is_start, setIs_start] = useState(false);
  const [Player, setPlayer] = useState("x");
  const [Xnext, setXnext] = useState(true);
  const [PalyerMode, setPalyerMode] = useState();
  const [Squeres, setSqueres] = useState(new Array(9).fill(""));
  const [Line, setLine] = useState([]);
  const [Winner, setWinner] = useState("");
  const [Ties, setTies] = useState({ x: 0, y: 0, no: 0 });
  // const [PalyearCaption, setPalyearCaption] = useState({ x: 0, y: 0, no: 0 });
  // alert(is_start);
  // console.log(Squers);

  function checkPlyear(pram) {
    if (PalyerMode == "cup") {
      return Player == pram ? `you (${pram})` : `Cup (${pram})`;
    }

    return Player == pram ? `Player 1  (${pram})` : `Player 2  (${pram})`;
  }
  useEffect(() => {
    checkNoWinner();
    const currentUser = Xnext ? "x" : "o";
    if (PalyerMode === "cup" && Player !== currentUser) {
      CupNext();
    }
    // console.log("Else Cond");
  }, [is_start, Squeres, Xnext]);
  const CupNext = () => {
    // console.log("CUp Next Heelo");
    const cup_oprator = PalyerMode == "x" ? "x" : "o";
    const bestIndex = calcBestMove(Squeres, cup_oprator);
    console.log(bestIndex);
    const sq = [...Squeres];
    sq[bestIndex] = cup_oprator;
    setXnext(!Xnext);
    setSqueres(sq);
    CheckTheWinner(sq);
  };
  const HandlClick = () => {};
  const ChosePalyerMode = (parm) => {
    setPalyerMode(parm);
    console.log("Hello");
    setIs_start(true);
  };
  const ChoseSquer = (index) => {
    if (Squeres[index]) return;
    const next = Xnext ? "x" : "o";
    if (PalyerMode === "cup" && Player !== next) return;
    const sq = [...Squeres];
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

  const checkNoWinner = () => {
    if (!Squeres.includes("")) {
      console.log("No Winner");
      showRestartModel();
      Ties["no"] = Ties["no"] + 1;
      setTies(Ties);
      console.log(Ties);
    }
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
        Winner,
        Ties,
        checkPlyear,
      }}
    >
      {/*  */}
      {children}
    </GameContext.Provider>
  );
}

export default GameState;
