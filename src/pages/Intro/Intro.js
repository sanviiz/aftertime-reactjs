import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-light.png";
import { motion } from "framer-motion";

export default function Intro({ addImage }) {
  const history = useHistory();

  const fileInput = useRef();

  const upload = () => {
    fileInput.current.click();
  };

  const finishSelect = (e) => {
    let imgFile = URL.createObjectURL(e.target.files[0]);
    addImage(imgFile);
    history.push("/question");
  };

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
          <input
            ref={fileInput}
            type="file"
            accept="image/png, image/jpeg"
            onChange={finishSelect}
            hidden
          />
          <button className="btn-secondary" onClick={upload}>
            UPLOAD
          </button>
        </div>
      </div>
    </motion.div>
  );
}
