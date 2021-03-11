import React from "react";
import { Link } from "react-router-dom";

export default function Topbar(props) {
  const { addRound } = props;

  return (
    <div className="topBar">
      {props.link || (
        <img src={props.imgSrc} alt="aftertime-logo" className="logo" />
      )}
      {props.link && (
        <Link to="/">
          <img
            src={props.imgSrc}
            alt="aftertime-logo"
            className="logo"
            onClick={() => {
              if (addRound) addRound();
            }}
          />
        </Link>
      )}
      <div className={props.lineColor}></div>
    </div>
  );
}
