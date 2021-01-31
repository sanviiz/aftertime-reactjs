import React from "react";

export default function Yes({ call, give, who, note, perspective }) {
  return (
    <div>
      <h1 style={{ color: "green" }}>Yes</h1>
      <h2>call: {call}</h2>
      <h2>give: {give}</h2>
      <h2>who: {who}</h2>
      <h2>note: {note}</h2>
      <h2>perspective: {perspective}</h2>
    </div>
  );
}
