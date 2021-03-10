import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-light.png";
import SendBg from "../../assets/img/send/send-bg.png";
import breakPage from "../../assets/img/send/breakpage.png";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

export default function Send(props) {
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
    round,
    addRound,
  } = props;

  const imageSlider = useRef();

  const scrollToSlider = () => {
    imageSlider.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const history = useHistory();

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [[page, direction], setPage] = useState([round, 0]);

  const imageIndex = wrap(0, image.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

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
          style={{ backgroundImage: `url(${SendBg})` }}
        ></div>
        <div className="content-text">
          <div style={{ width: "700px" }}>
            <h1 className="display-4 mb-4" style={{ fontWeight: "500" }}>
              Forward this item of fondness to Aftertime
            </h1>
            <p className="mb-5" style={{ fontSize: "1.2rem" }}>
              Remember your identity and memories through your beloved items.
              <br />
              Send them to your future and forward to future generations.
            </p>
            <button className="button-primary mb-5" onClick={scrollToSlider}>
              VIEW SUMMARY
            </button>
            <br />
            <img
              src={breakPage}
              alt="break-page"
              class="mt-5"
              style={{ height: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className="extend-page">
        <div ref={imageSlider}></div>
        <div className="send-wrapper">
          <h1 className="display-5 mb-3 mt-5" style={{ fontWeight: "500" }}>
            Bring your beloved stuff to Aftertime
          </h1>
          <div className="img-slider">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                className="img"
                key={page}
                src={image[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
              {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
              {"‣"}
            </div>
          </div>
          <div>
            <p className="mt-4 mb-4" style={{ fontSize: "1.1rem" }}>
              <strong style={{ fontSize: "2rem" }}>{call[imageIndex]}</strong>
              {give[imageIndex] && <br />}
              {give[imageIndex] &&
                `This item is given to you by : ${give[imageIndex]}`}
              {two[imageIndex] && <br />}
              {two[imageIndex] && `It has been with you since childhood.`}
              {who[imageIndex] && <br />}
              {who[imageIndex] && `It reminds you of : ${who[imageIndex]}`}
              {five[imageIndex] && <br />}
              {five[imageIndex] && `You use to play with this item.`}
              {note[imageIndex] && <br />}
              {note[imageIndex] && `Story about this item: ${note[imageIndex]}`}
              {eight[imageIndex] && <br />}
              {eight[imageIndex] && `This item is part of your routine.`}
              {nine[imageIndex] && <br />}
              {nine[imageIndex] && `And you feel passionated about it.`}
              <br />
              We think you would miss this item if it were not around.
            </p>
            <button
              className="button-primary mr-5"
              style={{ width: "190px" }}
              onClick={() => {
                addRound();
                history.push("/intro");
              }}
            >
              ADD MORE
            </button>
            <button className="button-primary" style={{ width: "190px" }}>
              CONTINUE
            </button>
            <br />
            <img
              src={breakPage}
              alt="break-page"
              class="mt-5 mb-4"
              style={{ height: "10px" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
