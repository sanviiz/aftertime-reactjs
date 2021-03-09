import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import "./App.css";
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";
import { CacheImages } from "./components/CacheImages";

function App() {
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const color = "#fff";

  const [loading, setLoading] = useState(true);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setLoading(false);
  };

  useEffect(() => {
    cacheImages(CacheImages);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <div>
            <ClockLoader color={color} css={override} size={250} />
            <p style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
              Please wait...
            </p>
          </div>
        </div>
      ) : (
        <Routes />
      )}
    </div>
  );
}

export default App;
