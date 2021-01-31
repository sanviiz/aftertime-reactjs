import React from "react";

export default function ProgressBar(props) {
  const { completed } = props;

  const containerStyles = {
    height: 15,
    width: "50%",
    backgroundColor: "#505FA3",
    borderRadius: 50,
    margin: 50,
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
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={barMiddle}>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
}
