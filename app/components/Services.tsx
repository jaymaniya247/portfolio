"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "@/app/utils/utils";
import ServicePopup from "./popup/ServicePopup";
import Image from "next/image";

interface Service {
  name: string;
  img: string;
  description: string[];
}

const serviceData: Service[] = [
  {
    name: "Full-Stack Development",
    img: "/img/service/mern.jpg",
    description: [
      "As a MERN stack developer, I specialize in creating end-to-end web applications that seamlessly integrate MongoDB, Express.js, React, and Node.js.",
      "From crafting robust backends to designing interactive frontends, I bring your ideas to life with efficient code and user-centric design.",
      "Whether you need a dynamic e-commerce platform, a data-driven dashboard, or a modern web app, I'm here to develop solutions that drive your business forward.",
    ],
  },
  {
    name: "API Development",
    img: "/img/service/api.jpg",
    description: [
      "Empower your digital presence with my expertise in designing and building APIs using Node.js and Express.js.",
      "I excel in creating RESTful APIs that enable seamless communication between different components of your application.",
      "With a strong focus on efficiency and security, I ensure your application's backend operates smoothly, enabling data flow and functionality.",
    ],
  },
  {
    name: "Frontend Development",
    img: "/img/service/frontend.jpg",
    description: [
      "Crafting captivating user experiences is my forte. Using React, I design and develop interactive, responsive frontends that engage and delight users.",
      "Whether it's a dynamic single-page application or a feature-rich user interface, I bring together creativity and functionality to enhance user engagement.",
      "Let's collaborate to transform your vision into a user-friendly, visually appealing frontend that sets your application apart.",
    ],
  },
  {
    name: "Database Management",
    img: "/img/service/Database.png",
    description: [
      "A solid foundation is crucial for every application. I specialize in leveraging MongoDB to design efficient and scalable database architectures.",
      "From data modeling to implementation, I ensure your application's data management is optimized for performance and reliability.",
      "Partner with me to build a secure, well-structured database that supports your application's growth and functionality.",
    ],
  },
];

const Services: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [activeData, setActiveData] = useState<Service>({
    name: "",
    img: "",
    description: [],
  });
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current === i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <Image
                            width={1000}
                            height={1000}
                            className="svg"
                            src="/img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <Image
                        width={1000}
                        height={1000}
                        className="popup_service_image"
                        src="/img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
