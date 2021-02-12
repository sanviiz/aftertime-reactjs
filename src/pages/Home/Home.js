import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-dark.png";

export default function Home() {
  const bottomRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page">
        <Topbar imgSrc={Logo} lineColor="topLine-dark" />
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/Oh6HJxCutQc"
            playing="true"
            volume="0.3"
            width="70%"
            height="100%"
          />
        </div>
        <div className="btn-center">
          <button className="button-primary" onClick={scrollToBottom}>
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
            <Link to="/intro">
              <button className="button-secondary">BEGIN</button>
            </Link>
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
    </motion.div>
  );
}
