import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./twoBody.css";
import { Tilt } from "react-tilt";

gsap.registerPlugin(ScrollTrigger);
const TwoBody = () => {
  const stringRef = useRef(null);

  const initialPath = "M 10 30 Q 600 30 1190 30";
  const finalPath = "M 10 30 Q 600 30 1190 30";
  //   const defaultOptions = {
  //     reverse: false, // reverse the tilt direction
  //     max: 10, // max tilt rotation (degrees)
  //     perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  //     scale: 0.9, // 2 = 200%, 1.5 = 150%, etc..
  //     speed: 1000, // Speed of the enter/exit transition
  //     // transition: true, // Set a transition on enter/exit.
  //     axis: "x", // What axis should be disabled. Can be X or Y.
  //     reset: true, // If the tilt effect has to be reset on exit.
  //     easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  //   };

  const handleMouseMove = (e) => {
    const string = stringRef.current;
    const rect = string.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const normalizedY = Math.max(0, Math.min(y, rect.height)); // Ensure y is within bounds
    console.log(normalizedY);

    const dynamicPath = `M 10 30 Q 600 ${normalizedY} 1190 30`;
    gsap.to("svg path", {
      attr: { d: dynamicPath },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to("svg path", {
      attr: { d: finalPath },
      duration: 0.4,
      ease: "elastic.out(1, 0.2)",
    });
  };

  useGSAP(() => {
    gsap.from(".twoBody", {
      opacity: 0,
      //   overflow: "hidden",
      duration: 0.5,
      x: 100,
      ease: "power3.out",
      scrollTrigger: {
        scroller: "body",
        trigger: ".twoBody",
        start: "top 100%",
        end: "top 50%",
        scrub: 2,
      },
    });
  });

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div
        ref={stringRef}
        className="string "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          width="100%"
          height="60"
          viewBox="0 0 1200 60"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 10 30 Q 600 30 1190 30"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="twoBody glass">
        <span className="profile-text">
          Projects
          <hr />
        </span>
        <div className="container-project">
          <div className="projects-container glass">
            <img src="/projects/spotify.png" alt="" className="project-image" />
          </div>
          <div className="projects-container glass">
            <img
              src="/projects/clipControl1.png"
              alt=""
              className="project-image"
            />
          </div>
          <div className="projects-container glass">
            <img
              src="/projects/mac-os-home.png"
              alt=""
              className="project-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoBody;
