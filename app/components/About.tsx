import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">1</h3>
              <span className="experience">Year of Experience</span>
              <h3 className="name">Jay Maniya</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <Image
                width={1000}
                height={1000}
                className="svg"
                src="/img/svg/element.svg"
                alt=""
              />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                With a Year experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the development process, from
                discussion and collaboration.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="/img/cv/jay-maniya.pdf" download>
                  Download CV{" "}
                  <Image
                    width={192}
                    height={75}
                    className="svg"
                    src="/img/svg/paper.svg"
                    alt=""
                  />
                </a>
              </div>
              {/* <Image width={192} height={75} src="/img/signature.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
