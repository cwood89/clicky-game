import React from "react";
import "./style.css";

function Img(props) {
  return (
    <div className="game-img" >
      <img alt={props.name}
        src={props.image}
        onClick={() => props.runGame()} />
    </div>
  )
}

export default Img;
