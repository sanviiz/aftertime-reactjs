import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Topbar from "../../components/Topbar";
import Logo from "../../assets/logo/logo-light.png";
import gradientBg from "../../assets/img/home/gradient-bg.png";
import HomeElement from "../../assets/img/home/element.png";
import aftertime from "../../assets/img/home/aftertime.png";
import briefProcess from "../../assets/img/home/briefprocess.png";
import groupHome from "../../assets/img/home/group-home.png";

export default function Home() {
  const bottomRef = useRef();

  const videoRef = useRef();

  const imageRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToVideo = () => {
    videoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToImage = () => {
    imageRef.current.scrollIntoView({
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
        <Topbar imgSrc={Logo} lineColor="topLine-light" />
        <div
          className="content-bg"
          style={{ backgroundImage: `url(${gradientBg})` }}
        ></div>
        <div className="home-wrapper">
          <img src={HomeElement} alt="home-element" className="home-element" />
          <img src={aftertime} alt="aftertime" className="home-logo" />
          <div className="line-break"></div>
          <div className="home-button">
            <button
              className="button-primary mr-5"
              style={{ width: "190px" }}
              onClick={scrollToVideo}
            >
              SEE MORE
            </button>
            <Link to="/intro">
              <button className="button-primary" style={{ width: "190px" }}>
                BEGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="extend-page">
        <div ref={videoRef}></div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/Dx5bbTZthOQ"
            volume="0.3"
            width="70%"
            height="100%"
          />
        </div>
        <div className="video-btn">
          <button
            className="button-primary"
            style={{ width: "190px" }}
            onClick={scrollToImage}
          >
            NEXT
          </button>
        </div>
      </div>
      <div className="extend-page">
        <div ref={imageRef}></div>
        <img src={briefProcess} alt="brief-process" className="home-image" />
        <div className="home-image-btn">
          <button
            className="button-primary"
            style={{ width: "190px" }}
            onClick={scrollToBottom}
          >
            NEXT
          </button>
        </div>
      </div>
      <div className="extend-page">
        <div
          className="content-bg"
          style={{ backgroundImage: `url(${groupHome})` }}
        ></div>
        <div className="home-wrapper">
          <div style={{ width: "900px" }}>
            <h1 className="display-3 mb-4" style={{ fontWeight: "500" }}>
              Bring your beloved stuff to Aftertime
            </h1>
            <p className="mb-5" style={{ fontSize: "1.5rem" }}>
              Aftertime helps reveal l objects that are truly important <br />
              to you through the Sentimental Value Quiz and <br /> encourages
              the preservation of items by sending them <br /> via emails to the
              future you.
            </p>
            <Link to="/intro">
              <button className="button-primary" style={{ width: "190px" }}>
                BEGIN
              </button>
            </Link>
          </div>
          <div className="footer-line"></div>
          <div className="footer">
            <p>
              © 2021 by PANTAWAN CH.︱All of the contents are only for the
              educational purpose.
            </p>
            <a href="https://fb.me/sendme.aftertime">Contact us</a>
          </div>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </motion.div>
  );
}
