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
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
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
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="#">
                      <Image
                        width={50}
                        height={50}
                        className="svg"
                        src="/img/svg/social/be.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width={50}
                        height={50}
                        className="svg"
                        src="/img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Image
                        width={50}
                        height={50}
                        className="svg"
                        src="/img/svg/social/instagarm.svg"
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
