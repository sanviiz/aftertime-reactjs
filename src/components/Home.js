import React, { useRef } from "react";
import Logo from "../assets/logo/logo-2x.png";

export default function Home() {
  const bottomRef = useRef();
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="App">
      <div className="page">
        <div className="topBar">
          <img src={Logo} alt="aftertime-logo" className="logo" />
          <div className="topLine"></div>
        </div>
        <video controls></video>
        <div className="btn-center">
          <button className="btn-primary" onClick={scrollToBottom}>
            NEXT
          </button>
        </div>
      </div>
      <div className="extend-page">
        <div className="content">
          <div className="content-bg"></div>
          <div className="content-text">
            <h1>Nothing lasts forever</h1>
            <p>
              There is no way we can hold everything forever. Aftertime assists
              you to emphasise what is important to you, and encourage you to
              preserve your favourite objects by sending them into your future.
            </p>
            <button className="btn-secondary">BEGIN</button>
          </div>
        </div>
        <div className="footer">
          <p>
            © 2021 by PANTAWAN CH.︱All of the contents are only for the
            educational purpose.
          </p>
          <p>Contact us</p>
        </div>
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
}
