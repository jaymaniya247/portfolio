import Image from "next/image";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="text">
              <h3>{`Let's`} work together</h3>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="mailto:jaymaniya247@gmail.com">
                Say Hello{" "}
                <Image
                  height={24}
                  width={24}
                  className="svg"
                  src="/img/svg/send.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="#">
                      +91 (958) 698 7333
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="#">
                      jaymaniya247@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Socials:</span>
                <ul>
                  <li>
                    <a
                      href="https://github.com/jaymaniya247/jaymaniya247"
                      target="_blank"
                    >
                      <Image
                        width={1000}
                        height={1000}
                        className="svg"
                        src="/img/svg/github.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jay-maniya-8a9913206/"
                      target="_blank"
                    >
                      <Image
                        width={1000}
                        height={1000}
                        className="svg"
                        src="/img/svg/linkedin.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <Image
            width={50}
            height={50}
            className="svg"
            src="/img/svg/elements.svg"
            alt=""
          />
        </span>
        <span className="element2">
          <Image
            width={50}
            height={50}
            className="svg"
            src="/img/svg/element-2.svg"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default Contact;
