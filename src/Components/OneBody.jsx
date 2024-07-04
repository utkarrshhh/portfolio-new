import React, { useEffect, useRef } from "react";
import "./OneBody.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { FONT_SIZE } from "timeline/build/constants";
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
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
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
                  style={{
                    height: "100%",
                    width: "100%",
                    filter: "invert(1)",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
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
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            //   background: "white",
          }}
        >
          <span
            style={{
              width: "100%",
              height: "10%",
              fontSize: "1rem",
              fontWeight: "100",
            }}
          >
            Skills and Tech stack
            <hr />
          </span>
          <div
            className="languagesMiniContainer"
            style={{
              height: "85%",
              width: "100%",
              //   border: "1px solid",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
              //   gap: "4px",
              color: "white",
              padding: "10px",
            }}
          >
            <div
              className="skillContain jsSkill"
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
              className="skillContain htmlSkill"
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
              className="skillContain gitSkill"
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
              className="skillContain cssSkill"
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
              className="skillContain expressSkill"
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
              className="skillContain jwtSkill"
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
              className="skillContain reactSkill"
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
              className="skillContain nodeSkill"
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
              className="skillContain typeScriptSkill"
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
              className="skillContain pythonSkill"
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
              className="skillContain javaSkill"
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
            <div
              className="skillContain mongoSkill"
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
              className="skillContain reduxSkill"
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
              className="skillContain cSkill"
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
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default OneBody;
