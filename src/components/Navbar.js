import React from "react";
import newsRead from "./newsRead.png"

function Navbar({navColor,invert}) {
  return (
    <div>
     <header style={{backgroundColor:navColor}}>
      <nav>
        <ul>
          <li><img src={newsRead} alt='' style={{filter:invert}}/></li>
          <li>NEWS APP</li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;
