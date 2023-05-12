import "./App.css";
import Xicon from "./components/Icons/Xicon";
import Oicon from "./components/Icons/Oicon";
import Start from "./components/Start";
import Board from "./components/Board";
import Win from "./components/Win";
import { useContext } from "react";
import GameState, { GameContext } from "./components/context/GameState";
export function handleStart(param) {
  return;
}
function App() {
  const { is_start } = useContext(GameContext);
  // console.log(is_start);
  return (
    <div className="App">
      {!is_start ? <Start /> : <Board />}
      <Win />
      {/* <Restart /> */}
    </div>
  );
}

export default App;
