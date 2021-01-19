import React from "react";
import { Link } from "react-router-dom";

export default function Topbar(props) {
  return (
    <div className="topBar">
      <Link to="/">
        <img src={props.imgSrc} alt="aftertime-logo" className="logo" />
      </Link>
      <div className={props.lineColor}></div>
    </div>
  );
}
