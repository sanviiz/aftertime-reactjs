import React from "react";
import Info from "../assets/svg/information.svg";
import ReactTooltip from "react-tooltip";

export default function ProgressBar(props) {
  const { completed, tooltip } = props;

  const containerStyles = {
    height: 17,
    width: "50%",
    backgroundColor: "#505FA3",
    borderRadius: 50,
    margin: 50,
    marginRight: 10,
  };

  const fillerStyles = {
    transition: "width 1s ease-in-out",
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#E7AB5D",
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
    width: "25px",
  };

  return (
    <div style={barMiddle}>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
      <img src={Info} alt="Information" style={infoIcon} data-tip={tooltip} />
      <ReactTooltip type="light" />
    </div>
  );
}
