import React, { useRef } from "react";
import "./OneBody.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Tilt } from "react-tilt";

const OneBody = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".simpleContainer", {
      scale: 0.3,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1.3,
    });
  });

  const defaultOptions = {
    reverse: false,
    max: 20,
    perspective: 1000,
    scale: 1,
    speed: 900,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div ref={containerRef} className="onebody-container">
      <Tilt options={defaultOptions} className="tilt-container">
        <div className="profileContainer simpleContainer glass2">
          <span className="profile-text">
            Profile 1
            <hr />
          </span>
        </div>
      </Tilt>
      <Tilt options={defaultOptions} className="tilt-container">
        <div className="profileContainer simpleContainer glass2">
          <span className="profile-text">
            Profile 2
            <hr />
          </span>
        </div>
      </Tilt>
      <Tilt options={defaultOptions} className="tilt-container">
        <div className="profileContainer simpleContainer glass2">
          <span className="profile-text">
            Skills and Tech stack
            <hr />
          </span>
          <div className="content-container2">
            <div
              className="skillContain jsSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
                // margin: "4px",
              }}
            >
              <img
                src="/skills/java-script.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>JavaScript</div>
            </div>
            <div
              className="skillContain htmlSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
                // margin: "4px",
              }}
            >
              <img
                src="/skills/html.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>HTML</div>
            </div>
            <div
              className="skillContain gitSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/githubTransparent.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>GitHub</div>
            </div>
            <div
              className="skillContain cssSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/css-3.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>CSS</div>
            </div>

            <div
              className="skillContain dockerskill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/docker.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>Docker</div>
            </div>

            <div
              className="skillContain pythonSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/firebase.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>firebase</div>
            </div>

            <div
              className="skillContain jwtSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/jwtLogo.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>JWT</div>
            </div>
            <div
              className="skillContain reactSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/react.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>ReactJS</div>
            </div>
            <div
              className="skillContain nodeSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/node-js.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>NodeJS</div>
            </div>
            <div
              className="skillContain mongoSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/mongo.webp"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>MongoDB</div>
            </div>
            <div
              className="skillContain expressSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/express.png"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              {/* <div style={{ width: "70%" }}>Express</div> */}
            </div>
            <div
              className="skillContain reduxSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/redux.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>Redux</div>
            </div>
            <div
              className="skillContain typeScriptSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/typescript.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>TypeScript</div>
            </div>
            <div
              className="skillContain pythonSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/python.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>Python</div>
            </div>

            <div
              className="skillContain cSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/c-.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>C++</div>
            </div>
            <div
              className="skillContain javaSkill margin"
              style={{
                height: "2.5rem",
                minWidth: "5rem",
                // border: "2px solid",
                padding: "4px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                fontSize: "small",
              }}
            >
              <img
                src="/skills/java.png"
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
              <div style={{ width: "70%" }}>Java</div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default OneBody;
