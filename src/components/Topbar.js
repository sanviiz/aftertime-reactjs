import React from "react";

export default function Topbar(props) {
  return (
    <div className="topBar">
      <a href="/">
        <img src={props.imgSrc} alt="aftertime-logo" className="logo" />
      </a>
      <div className={props.lineColor}></div>
    </div>
  );
}
