import React from "react";
import Topbar from "../../components/Topbar";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo/logo-light.png";
import { motion } from "framer-motion";
import NoBg from "../../assets/img/summary/no-bg.png";
import ReactTooltip from "react-tooltip";

export default function No(props) {
  const {
    image,
    two,
    // three,
    five,
    // seven,
    eight,
    nine,
    call,
    give,
    who,
    note,
    // perspective,
    addRound,
  } = props;

  const tooltip =
    `Splendid! ${call} seems to be very significant to your life.` +
    (give ? `<br />This item is given to you by : ${give}` : "") +
    (two ? `<br />It has been with you since childhood.` : "") +
    (who ? `<br />It reminds you of : ${who}` : "") +
    (five ? `<br />You use to play with this item.` : "") +
    (note ? `<br />Story about this item: ${note}` : "") +
    (eight ? `<br />This item is part of your routine.` : "") +
    (nine ? `<br />And you feel passionated about it.` : "") +
    `<br />We think you would miss this item if it were not around.`;

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
                    className="button-primary mb-3 mr-3"
                    onClick={() => {
                      addRound();
                      history.push("/intro");
                    }}
                  >
                    TRY ANOTHER
                  </button>
                  <button
                    style={{ cursor: "default" }}
                    className="button-primary mb-3"
                    data-tip={tooltip}
                  >
                    <svg viewBox="0 0 80 70" width="30" height="30" fill="#fff">
                      <rect width="80" height="7" rx="8"></rect>
                      <rect y="30" width="80" height="7" rx="8"></rect>
                      <rect y="60" width="80" height="7" rx="8"></rect>
                    </svg>
                  </button>
                  <ReactTooltip place="right" type="light" multiline={true} />
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
