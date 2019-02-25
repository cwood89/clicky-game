import React from "react";

let style = {
  position: "sticky",
  top: 0
}

function Score(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={style}>
      <div className="container-fluid">
        <div className="navbar-header">
          <h1 className="navbar-brand">Click This!</h1>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>Score: {props.score}</li>
          <li> | </li>
          <li>Top Score: {props.topScore}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Score;