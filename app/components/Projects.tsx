"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../utils/sliderProps";
import { dataImage } from "@/app/utils/utils";
import DetailsPopup from "./popup/DetailsPopup";
import Image from "next/image";

const Projects: React.FC = () => {
  useEffect(() => {
    dataImage();
  }, []);

  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        width={1000}
                        height={1000}
                        src="/img/thumbs/37-40.jpg"
                        alt=""
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youtube</span>
                      <h3 className="title">
                        <span>Car Export</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* ... Other SwiperSlide elements ... */}
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <Image
                  width={1000}
                  height={1000}
                  className="svg"
                  src="/img/svg/prev.svg"
                  alt=""
                />
              </a>
              <a className="next_button" href="#">
                <Image
                  width={1000}
                  height={1000}
                  className="svg"
                  src="/img/svg/next.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
