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
          className="profileContainer simpleContainer glass2 "
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
            Profile
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
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            //   background: "blue",
          }}
        >
          <span
            style={{
              width: "100%",
              height: "10%",
              fontSize: "1.4rem",
              fontWeight: "100",
            }}
          >
            Education
            <hr />
          </span>
          <div
            className="kiitInfo"
            style={{
              height: "40%",
              //   border: "2px solid",
              width: "100%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "0.1rem",
            }}
          >
            <div
              style={{
                height: "40%",
                width: "100%",
                // border: "2px solid",
                overflow: "hidden",
                // borderRadius: "50%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: " 0 10px",
              }}
            >
              <div style={{ height: "100%", width: "30%", overflow: "hidden" }}>
                <img
                  src="/kiitLogo.png"
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <p style={{ color: "#17ce59" }}>
                KIIT UNIVERSITY{" "}
                <span style={{ fontSize: "2vh" }}>(2021-2025)</span>
              </p>
            </div>
            <div
              className="infoKiit"
              style={{
                height: "70%",
                width: "100%",
                // border: "2px solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textAlign: "left",
                padding: "0 5px",
                // justifyContent: "right",
              }}
            >
              <span>Btech. CSE</span>
              <span>CGPA - 8.38</span>
              <span>2021 - present</span>
            </div>
          </div>
          <div
            className="ryanInfo"
            style={{
              height: "40%",
              //   border: "2px solid",
              width: "100%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "0.1rem",
            }}
          >
            <div
              style={{
                height: "40%",
                width: "100%",
                // border: "2px solid",
                overflow: "hidden",
                // borderRadius: "50%",
                display: "flex",
                justifyContent: "space-between",
                gap: "2px",
                alignItems: "center",
                padding: " 0 10px",
              }}
            >
              <div style={{ height: "100%", width: "30%", overflow: "hidden" }}>
                <img
                  src="/image.png"
                  alt=""
                  style={{ height: "100%", width: "100%", filter: "invert(1)" }}
                />
              </div>
              <p style={{ color: "rgb(212 232 144)" }}>
                RYAN INTERNATIONAL{" "}
                <span style={{ fontSize: "2vh" }}>(2018-2021)</span>
              </p>
            </div>
            <div
              className="infoKiit"
              style={{
                height: "70%",
                width: "100%",
                // border: "2px solid",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                textAlign: "left",
                padding: "0 5px",
                // justifyContent: "right",
              }}
            >
              <span>Stream - PCM</span>
              <span>12th - 86%</span>
              <span>10th - 91.2</span>
            </div>
          </div>
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
