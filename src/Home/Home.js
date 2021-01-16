import React, { useRef } from "react";
import { motion } from "framer-motion";
import history from "../history";
import Topbar from "../components/Topbar";
import Logo from "../assets/logo/logo-dark.png";

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
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page">
        <Topbar imgSrc={Logo} lineColor="topLine-dark" />
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
            <form>
              <button
                className="btn-secondary"
                onClick={() => {
                  history.push("/intro");
                }}
              >
                BEGIN
              </button>
            </form>
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
