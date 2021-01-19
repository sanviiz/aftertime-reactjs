import React from "react";

export default function Question({ images, round }) {
  const imageSrc = images[round];

  return (
    <div>
      <img src={imageSrc} alt="img" />
    </div>
  );
}
