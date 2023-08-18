import Image from "next/image";
import React from "react";

interface HomeProps {
  dark?: boolean;
}

const Home: React.FC<HomeProps> = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                John Smith{" "}
                <Image
                  width={1000}
                  height={1000}
                  className="svg"
                  src="/img/svg/hi.svg"
                  alt=""
                />
              </h3>
              <span className="job">Visual Designer</span>
            </div>
            <div className="text">
              <p>
                I&apos;m a creative designer based in New York, and I&apos;m
                very passionate and dedicated to my work.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <Image
                    width={1000}
                    height={1000}
                    className="svg"
                    src="/img/svg/send.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <Image
                    width={1000}
                    height={1000}
                    className="svg"
                    src="/img/svg/top-arrow.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            <li>
              <a href="#">
                <Image
                  width={1000}
                  height={1000}
                  className="svg"
                  src="/img/svg/social/be.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  width={1000}
                  height={1000}
                  className="svg"
                  src="/img/svg/social/dribbble.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  width={1000}
                  height={1000}
                  className="svg"
                  src="/img/svg/social/instagarm.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <Image
            width={1000}
            height={1000}
            className="svg"
            src={`/img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <Image
            width={1000}
            height={1000}
            src={`/img/hero/${dark ? 2 : 1}.jpg`}
            alt=""
          />
          <div className="video_button">
            <a
              className="popup-youtube"
              href="https://www.youtube.com/watch?v=7e90gBu4pas"
            >
              <Image
                width={1000}
                height={1000}
                className="anim_circle"
                src="/img/hero/welcome.png"
                alt=""
              />
              <Image
                width={1000}
                height={1000}
                className="svg"
                src="/img/svg/play.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
