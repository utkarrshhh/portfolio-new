import React, { useEffect, useRef } from "react";
import "./OneBody.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { FONT_SIZE } from "timeline/build/constants";
import { Tilt } from "react-tilt";

const OneBody = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    // gsap.from("hr", {
    //   delay: 1.4,
    //   duration: 0.5,
    //   x: -100,
    //   //   fontWeight: "200",
    //   opacity: 0,
    //   ease: "power3.out",
    // });
    gsap.from(".simpleContainer", {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1.3,
    });
  });
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 900, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: "85vh",
        width: "90%",
        margin: "1rem auto",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Tilt options={defaultOptions} style={{ height: "70vh", width: "20vw" }}>
        <div
          className="skillContainer simpleContainer glass2 "
          style={{
            height: "70vh",
            width: "20vw",
            padding: "10px",
            //   background: "yellow",
          }}
        >
          <span
            style={{
              width: "100%",
              height: "20%",
              fontSize: "1.4rem",
              fontWeight: "100",
            }}
          >
            Skills
            <hr />
          </span>
        </div>
      </Tilt>
      <Tilt options={defaultOptions} style={{ height: "70vh", width: "20vw" }}>
        <div
          className="educationContainer simpleContainer glass2"
          style={{
            height: "70vh",
            width: "20vw",
            padding: "10px",
            //   background: "blue",
          }}
        >
          <span
            style={{
              width: "100%",
              height: "20%",
              fontSize: "1.4rem",
              fontWeight: "100",
            }}
          >
            Education
            <hr />
          </span>
        </div>
      </Tilt>
      <Tilt options={defaultOptions} style={{ height: "70vh", width: "20vw" }}>
        <div
          className="languageContainer simpleContainer glass2"
          style={{
            height: "70vh",
            width: "20vw",
            padding: "10px",
            //   background: "white",
          }}
        >
          <span
            style={{
              width: "100%",
              height: "20%",
              fontSize: "1.4rem",
              fontWeight: "100",
            }}
          >
            Languages
            <hr />
          </span>
        </div>
      </Tilt>
    </div>
  );
};

export default OneBody;
