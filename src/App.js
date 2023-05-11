import "./App.css";
// import { Oicon, Xicon } from "./components";
// import  from "./components";
import Xicon from "./components/Icons/Xicon";
import Oicon from "./components/Icons/Oicon";
function handleStart(param) {
  return;
}
function App() {
  return (
    <div className="App">
      {/* Container Filed */}
      <div className="flex  p-3 flex-col  m-auto h-[100vh]  justify-center items-center w-full">
        <div
          className="flex-col max-w-[480px] flex overflow-hidden justify-around  sm:min-h-[75%] min-h-[100%]  
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
              <span className="flex-1 active rounded-[10px] p-3">
                {" "}
                <Xicon color="dark" />
              </span>
              <span className="flex-1 rounded-[10px] p-3">
                <Oicon color="dark" />
              </span>
            </div>
            <h6 className="text-grey"> Rembers X Code Firest </h6>
          </div>
          <div className="flex flex-col justify-around sm:h-[150px]">
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
    </div>
  );
}

export default App;
