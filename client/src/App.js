import "./App.css";
import "./index.css";
import Moscu from "./Images/moscusinfondo2.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./helpers/AuthContext";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    const getAuth = async () => {
      const response = await axios.get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      });
      console.log(response);
      if (response.data.error) {
        setAuthState({ ...authState, status: false });
      } else {
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
      }
      getAuth();
    };
  }, []);

  return (
    <div className="App bg-black">
      <AuthContext.Provider value={{ authState, setAuthState }}>
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
