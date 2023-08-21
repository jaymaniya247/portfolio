/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "@/app/utils/utils";
import Counter from "./Counter";
import Image from "next/image";

interface Skill {
  name: string;
  value: number | string;
  icon: string;
}

interface Experience {
  company: string;
  designation: string;
  time: string;
}

interface Education {
  institution: string;
  certificate: string;
  time: string;
}

const counts = [
  { name: "Trainings", value: 10 },
  // { name: "Written Book", value: 48 },
  { name: "Running Projects", value: 2 },
  { name: "Own Projects", value: 6 },
];

const skills: Skill[] = [
  { name: "Reactjs", value: "90", icon: "/img/svg/react.svg" },
  { name: "Nextjs", value: "90", icon: "/img/svg/nextjs.svg" },
  { name: "Nodejs", value: "90", icon: "/img/svg/node.svg" },
  { name: "Expressjs", value: "95", icon: "/img/svg/express.svg" },
  { name: "Mongodb", value: "85", icon: "/img/svg/mongodb.svg" },
  { name: "Git", value: "85", icon: "/img/svg/git.svg" },
  { name: "Github", value: "95", icon: "/img/svg/github.svg" },
];

const experiences: Experience[] = [
  {
    company: "Lathiya Solutions",
    designation: "Full Stack Developer (MERN + PHP)",
    time: "2022 - Present",
  },
];

const educations: Education[] = [
  {
    institution: "Jain Deemed To Be University",
    certificate: "Master of Computer Application",
    time: "2023 - Present",
  },
  {
    institution: "Veer Narmad South Gujarat University",
    certificate: "Bachelor of Computer Applications",
    time: "2020 - 2023",
  },
];

const ExpertAreas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const activeContentTab = (value: number): string => {
    return activeTab === value ? "current" : "";
  };

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    Greetings! I&apos;m Jay Maniya, an Indian MERN stack
                    developer. While I excel in MERN, I thrive on embracing
                    challenges to fuel my growth. Collaboration is my
                    cornerstone; I enjoy crafting seamless solutions through
                    teamwork. Beyond coding, I explore tech trends and seek
                    inspiration. My portfolio showcases my journey.
                  </p>
                  <p>Let&apos;s connect and create together! Cheers, Jay.</p>
                </div>
                <div className="orido_tm_boxed_button">
                  <a href="/img/cv/jay-maniya.pdf" download>
                    My Resume{" "}
                    <Image
                      width={100}
                      height={100}
                      className="svg"
                      src="/img/svg/paper.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="/img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="/img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="/img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <Image
                                    width={100}
                                    height={100}
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                    style={{ width: 50 }}
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpertAreas;
