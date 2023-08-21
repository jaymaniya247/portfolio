"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../utils/sliderProps";
import { dataImage } from "@/app/utils/utils";
import DetailsPopup, { ProjectDataType } from "./popup/DetailsPopup";
import Image from "next/image";

// Projects data
import projects from "@/data/Projects.json";

const Projects: React.FC = () => {
  useEffect(() => {
    dataImage();
  }, []);

  const [detailsPopup, setDetailsPopup] = useState(false);
  const [ProjectData, setProjectData] = useState<ProjectDataType | null>(null);

  const handleDetailsPopup = (data: ProjectDataType) => {
    setDetailsPopup(true);
    setProjectData(data);
  };

  return (
    <Fragment>
      {ProjectData ? (
        <DetailsPopup
          close={() => setDetailsPopup(false)}
          open={detailsPopup}
          ProjectData={ProjectData}
        />
      ) : null}
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
                {projects.projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="list_inner">
                      <div className="image">
                        <Image
                          width={370}
                          height={400}
                          src={project.HeaderImage}
                          alt=""
                        />
                        <div
                          className="main"
                          data-img-url={project.HeaderImage}
                        />
                      </div>
                      <div className="details">
                        <span className="category">{project.category}</span>
                        <h3 className="title">
                          <span>{project.name}</span>
                        </h3>
                      </div>
                      <a
                        className="orido_tm_full_link details_link c-pointer"
                        onClick={() => handleDetailsPopup(project)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <a className="prev_button" href="#">
                <Image
                  width={370}
                  height={400}
                  className="svg"
                  src="/img/svg/prev.svg"
                  alt=""
                />
              </a>
              <a className="next_button" href="#">
                <Image
                  width={370}
                  height={400}
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
