import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="aboutcontainer">
      <div className="minicontainer">
        <p className="abouttitle">About Me</p>
        <div className="grid">
          <div className="stackcontainer  box">
            <p className="stacktitle">Mystack</p>
            <div className="stack">
              <img
                className="socialicon"
                loading="lazy"
                src="images/figma.svg"
                alt=""
              />
              <img
                className="socialicon"
                loading="lazy"
                src="images/framer.svg"
                alt=""
              />
              <img
                className="socialicon"
                loading="lazy"
                src="images/react.svg"
                alt=""
              />
              <img
                className="socialicon"
                loading="lazy"
                src="images/vs code.svg"
                alt=""
              />
              <img
                className="socialicon"
                loading="lazy"
                src="images/mongodb.svg"
                alt=""
              />
              <img
                className="socialicon"
                loading="lazy"
                src="images/js.svg"
                alt=""
              />
            </div>
          </div>
          <div className="column ">
            <div className="socialcard  box">
              <p className="stacktitle">Let's connect</p>
              <div className="social">
                <a href="https://dribbble.com/abhishek00123">
                  <img
                    className="socialicon2"
                    src="images/dribble.svg"
                    alt="Dribble"
                    loading="lazy"
                  />
                </a>
                <a href="https://www.behance.net/abhishehirapar">
                  <img
                    className="socialicon2"
                    src="images/behance.svg"
                    alt="Behance"
                    loading="lazy"
                  />
                </a>
                <a href="https://www.linkedin.com/in/abhishek-hirapara-47b5641a1/">
                  <img
                    className="socialicon2"
                    src="images/x.svg"
                    alt="LinkedIn"
                    loading="lazy"
                  />
                </a>
                <a href="https://www.linkedin.com/in/abhishek-hirapara-47b5641a1/">
                  <img
                    className="socialicon2"
                    src="images/logos_linkedin-icon.svg"
                    alt="LinkedIn"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="emailcard box ">
              <img
                className="profile"
                loading="lazy"
                src="images/profile-pic.png"
                alt=""
              />
              <p className="emailtitle">abhishekhirapara348@gmail.com</p>
            </div>
          </div>
          <div className="intoduction box">
            <p className="stacktitle">About me</p>
            <p className="mediscription">
              Hi there! I'm Abhishek, a versatile freelance web designer and
              full-stack developer with over 3 years of experience. Currently
              pursuing my B.Tech in Information Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
