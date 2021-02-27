import React from "react";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-light.png";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import YesBg from "../../assets/img/summary/yes-bg.png";

export default function Yes(props) {
  const {
    image,
    // two,
    // three,
    // five,
    // seven,
    // eight,
    // nine,
    // call,
    // give,
    // who,
    // note,
    // perspective,
    addRound,
  } = props;

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
          style={{ backgroundImage: `url(${YesBg})` }}
        ></div>
        <div className="summary-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-6 d-flex justify-content-center align-items-center text-left">
                <div>
                  <h1 className="display-3 mb-4" style={{ fontWeight: "500" }}>
                    This object seems to be very important to you.
                  </h1>
                  <p className="mb-4" style={{ fontSize: "1.5rem" }}>
                    Splendid! This item is significant in your life.
                    <br />
                    You would miss this item if it were not around.
                  </p>
                  <button
                    className="button-primary mb-3"
                    onClick={() => {
                      history.push("/send");
                    }}
                  >
                    SEND TO MY FUTURE
                  </button>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                    onClick={() => {
                      addRound();
                      history.push("/");
                    }}
                  >
                    <u>No, thanks.</u>
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
      {/* {call && <h1 style={{ color: "green" }}>{call}</h1>}
      {give && <h2>This item was given to you by: {give}.</h2>}
      {two && <h2>It has been with you since your childhood.</h2>}
      {three && <h2>It has been passed on to you.</h2>}
      {who && <h2>It reminds you of: {who}</h2>}
      {five && <h2>You used to play with this item.</h2>}
      {note && <h2>There is a story behind this item: {note}</h2>}
      {seven && <h2>You made or designed this item by yourself.</h2>}
      {eight && <h2>This item is a part of your routine.</h2>}
      {nine && <h2>You feel passionate about this item.</h2>}
      {perspective && (
        <h2>This item helped you find the perspective of: {perspective}</h2>
      )} */}
    </motion.div>
  );
}
