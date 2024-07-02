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
      //   fontWeight: "200",
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
      //   ease: "bounce.out",
      //   stagger: 0.2,
    });
    gsap.from(".nameContainer", {
      scale: "0.4",
      delay: 1,
    });
  });
  return (
    <>
      <div
        style={{
          width: "90%",
          height: "15vh",
          color: "white",
          // background: "hsla(0,0%,4%,.25)",
          // textAlign: "center",
          display: "flex",
          justifyContent: "spaceAround",
          alignItems: "center",
          borderRadius: "20px",
          margin: "1rem auto auto",
        }}
        className="nav-container glass"
      >
        <div
          style={{
            height: "100%",
            width: "90%",
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            justifyContent: "left",
            padding: "0 30px",
          }}
          className="nameContainer subContainer"
        >
          <h1 style={{ fontWeight: "100" }}>
            Utkarsh shukla <hr />
          </h1>
        </div>
        <div
          className="imgContainer subContainer"
          style={{
            width: "10%",
            height: "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 5px",
          }}
        >
          <Link
            to="https://github.com/utkarrshhh"
            target="_blank"
            style={{ background: "none", height: "100%" }}
          >
            <div
              className="imgSmallContainer"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px",
                filter: "invert(1)",
              }}
            >
              <img
                style={{
                  height: "70%",

                  // borderRadius: "50%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                src="./github.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="#" style={{ background: "none", height: "100%" }}>
            <div
              className="imgSmallContainer"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px",
                filter: "invert(1)",
              }}
            >
              <img
                style={{
                  height: "70%",

                  // borderRadius: "50%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                src="/twitter.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="#" style={{ background: "none", height: "100%" }}>
            <div
              className="imgSmallContainer"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px",
                filter: "invert(1)",
              }}
            >
              <img
                style={{
                  height: "70%",

                  // borderRadius: "50%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                src="/linkedin.png"
                alt=""
              />
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
