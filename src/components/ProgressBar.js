import React from "react";
import Info from "../assets/svg/information.svg";
import ReactTooltip from "react-tooltip";

export default function ProgressBar(props) {
  const { completed, tooltip } = props;

  const containerStyles = {
    height: 21,
    width: "50%",
    backgroundColor: "#ffffff40",
    border: "2px solid #fff",
    borderRadius: 50,
    margin: 50,
    marginRight: 10,
  };

  const fillerStyles = {
    transition: "width 1s ease-in-out",
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#fff",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const barMiddle = {
    width: "100%",
    height: "15vh",
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const infoIcon = {
    width: "27px",
  };

  return (
    <div style={barMiddle}>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
      <img src={Info} alt="Information" style={infoIcon} data-tip={tooltip} />
      <ReactTooltip type="light" multiline={true} />
    </div>
  );
}
