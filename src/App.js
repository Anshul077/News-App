import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./App.css";
import "./News.css";

function App() {
  const [colour, setColour] = useState(null);
  const [mode,setMode]=useState("Light Mode")
  const [navColor , setNavColor]=useState("rgb(228, 228, 228)")
  const [invert , setInvert]=useState("invert(-1)")

  function changeMode() {
    if(mode==="Light Mode")
    {
    window.document.body.style.backgroundColor = "#222222";
    window.document.body.style.color = "#fff";
    setMode("Dark Mode")
    setColour("#222222");
    setInvert("invert(1)");
    setNavColor("black")
    }
    else{
    window.document.body.style.backgroundColor = "#fff";
    window.document.body.style.color = "black";
    setMode("Light Mode")
    setColour("#fff");
    setInvert("invert(0)");
    setNavColor("rgb(228, 228, 228)")
    }
    
  }

  return (
    <div>
      <Navbar navColor={navColor} invert={invert} />
      <div className="mode">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={changeMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
        </div>
      </div>
      <News bgColor={colour} />
    </div>
  );
}

export default App;
