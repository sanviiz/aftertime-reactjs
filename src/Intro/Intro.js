import React from "react";
import Topbar from "../components/Topbar";
import history from "../history";
import Logo from "../assets/logo/logo-light.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="page-dark">
        <Topbar imgSrc={Logo} lineColor="topLine-light" />
        <div className="content-bg"></div>
        <div className="content-text">
          <h1>Bring your beloved stuff to your future</h1>
          <p>
            Prepare a photograph of an item you wish to send into your future,
            and let’s see if it has significance to you.
          </p>
          <form>
            <button className="btn-secondary">UPLOAD</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
