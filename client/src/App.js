import "./App.css";
import "./index.css";
import Moscu from "./Images/moscusinfondo2.png";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App bg-black">
      <img
        className="md:w-7/12 md:ms-72 relative h-auto"
        src={Moscu}
        alt="moscu"
      />
      <Link to="/login">
        <button className="bg-blue-500 hover:bg-blue-700 md:-mt-72 md:-ms-24  md:absolute text-white font-bold py-2 px-4 rounded ">
          LOG IN - REGISTER
        </button>
      </Link>
    </div>
  );
}

export default App;
