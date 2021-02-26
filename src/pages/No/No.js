import React from "react";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-light.png";
import { motion } from "framer-motion";

export default function No() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="page-dark">
        <Topbar imgSrc={Logo} lineColor="topLine-light" />
        <div className="sumary-container">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
