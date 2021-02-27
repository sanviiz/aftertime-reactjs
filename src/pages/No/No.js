import React from "react";
import Topbar from "../../components/Topbar";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo/logo-light.png";
import { motion } from "framer-motion";
import NoBg from "../../assets/img/summary/no-bg.png";

export default function No(props) {
  const { image, addRound } = props;

  const history = useHistory();

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
    >
      <div className="page">
        <Topbar imgSrc={Logo} lineColor="topLine-light" />
        <div
          className="content-bg"
          style={{ backgroundImage: `url(${NoBg})` }}
        ></div>
        <div className="summary-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-6 d-flex justify-content-center align-items-center text-left">
                <div>
                  <h1 className="display-3 mb-4" style={{ fontWeight: "500" }}>
                    This object seems to be not so important.
                  </h1>
                  <p className="mb-4" style={{ fontSize: "1.5rem" }}>
                    Hmm…,
                    <br />
                    This item doesn’t seem to matter to you that much.
                  </p>
                  <button
                    className="button-primary mb-3"
                    onClick={() => {
                      addRound();
                      history.push("/intro");
                    }}
                  >
                    TRY ANOTHER
                  </button>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                    onClick={() => history.push("/send")}
                  >
                    <u>Send it anyway.</u>
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  alt="img"
                  className="img-fluid question-image"
                />
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
