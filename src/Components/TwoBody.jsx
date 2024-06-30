import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TwoBody = () => {
  const stringRef = useRef(null);

  const initialPath = "M 10 30 Q 600 30 1190 30";
  const finalPath = "M 10 30 Q 600 30 1190 30";
  const string = stringRef.current;

  const handleMouseMove = (e) => {
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

  return (
    <div style={{ height: "100vh", width: "90%", margin: "auto" }}>
      <div
        ref={stringRef}
        className="string"
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
      skills
    </div>
  );
};

export default TwoBody;
