import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-light.png";
import IntroBg from "../../assets/img/intro/intro-bg.png";
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
      <div className="page">
        <Topbar imgSrc={Logo} lineColor="topLine-light" link={true} />
        <div
          className="content-bg"
          style={{ backgroundImage: `url(${IntroBg})` }}
        ></div>
        <div className="content-text">
          <div style={{ width: "700px" }}>
            <h1 className="display-4 mb-4" style={{ fontWeight: "500" }}>
              Sentimental Value Quiz
            </h1>
            <p className="mb-4 wrapper-p" style={{ fontSize: "1.2rem" }}>
              Prepare a digital photograph of an item you wish to send to your
              future;
              <br />
              make sure that the object can be seen clearly in the photo.
              <br />* If possible, take the photo of your item against a plain
              background.
            </p>
            <h5 className="mb-3 wrapper-h">
              Let’s see if it has significance to you.
            </h5>
            <input
              ref={fileInput}
              type="file"
              accept="image/png, image/jpeg"
              onChange={finishSelect}
              hidden
            />
            <button
              className="button-primary"
              onClick={upload}
              style={{ width: "190px" }}
            >
              UPLOAD
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
