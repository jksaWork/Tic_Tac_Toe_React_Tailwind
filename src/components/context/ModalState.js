import { createContext, useState } from "react";
const ModalContext = createContext();
// import React from "react";

function ModalState(props) {
  const [Win, setWin] = useState(false);
  const [Reastart, setReastart] = useState(false);
  const showWinModel = () => setWin(true);
  const showRestartModel = () => setReastart(true);
  const colseWinModal = () => setWin(false);
  const CloserestartModel = () => setReastart(false);

  return (
    <ModalContext.Provider
      value={{
        Win,
        Reastart,
        showWinModel,
        showRestartModel,
        colseWinModal,
        CloserestartModel,
      }}
    >
      {/*  */}

      <div>{props.children}</div>
    </ModalContext.Provider>
  );
}

export { ModalState, ModalContext };
