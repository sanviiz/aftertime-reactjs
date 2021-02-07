import React from "react";

export default function Yes({
  two,
  three,
  five,
  seven,
  eight,
  nine,
  call,
  give,
  who,
  note,
  perspective,
}) {
  return (
    <div>
      {call && <h1 style={{ color: "green" }}>{call}</h1>}
      {give && <h2>This item was given to you by: {give}.</h2>}
      {two && <h2>It has been with you since your childhood.</h2>}
      {three && <h2>It has been passed on to you.</h2>}
      {who && <h2>It reminds you of: {who}</h2>}
      {five && <h2>You used to play with this item.</h2>}
      {note && <h2>There is a story behind this item: {note}</h2>}
      {seven && <h2>You made or designed this item by yourself.</h2>}
      {eight && <h2>This item is a part of your routine.</h2>}
      {nine && <h2>You feel passionate about this item.</h2>}
      {perspective && (
        <h2>This item helped you find the perspective of: {perspective}</h2>
      )}
    </div>
  );
}
