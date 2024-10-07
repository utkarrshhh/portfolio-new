import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import OneBody from "./OneBody";
import TwoBody from "./TwoBody";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("hr", {
      delay: 1.4,
      duration: 0.5,
      x: -100,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(".nav-container", {
      duration: 0.5,
      y: -100,
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".subContainer", {
      duration: 0.3,
      x: 100,
      opacity: 0,
      delay: 1,
    });

    gsap.from(".nameContainer", {
      scale: "0.4",
      delay: 1,
    });
  });

  return (
    <>
      <div className="nav-container glass">
        <div className="nameContainer subContainer">
          <h1 style={{ color: " white", textShadow: "6px 6px 5px #000000" }}>
            Utkarsh Shukla <hr />
          </h1>
        </div>
        <div className="imgContainer subContainer">
          <Link to="./NEWRESUMEUTKARSH (1).pdf" target="_blank" download>
            <div className="imgSmallContainer">
              <img src="/resumeIcon.png" alt="Download Resume" />
            </div>
          </Link>
          <Link to="mailto:utkarsh3639@gmail.com">
            <div className="imgSmallContainer">
              <img src="/mail.png" alt="Mail" />
            </div>
          </Link>
          <Link to="https://github.com/utkarrshhh" target="_blank">
            <div className="imgSmallContainer">
              <img src="/github.png" alt="GitHub" />
            </div>
          </Link>
          <Link to="#">
            <div className="imgSmallContainer">
              <img src="/twitter.png" alt="Twitter" />
            </div>
          </Link>
          <Link to="#">
            <div className="imgSmallContainer">
              <img src="./linkedin.png" alt="LinkedIn" />
            </div>
          </Link>
        </div>
      </div>
      <OneBody />
      <TwoBody />
    </>
  );
};

export default Navbar;
