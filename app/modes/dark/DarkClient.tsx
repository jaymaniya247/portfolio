"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import About from "@/app/components/About";
import Blog from "@/app/components/Blog";
import Contact from "@/app/components/Contact";
import ExpertAreas from "@/app/components/ExpertAreas";
import Feedback from "@/app/components/Feedback";
import Home from "@/app/components/Home";
import Services from "@/app/components/Services";
import CopyRight from "@/app/layouts/CopyRight";
import Header from "@/app/layouts/Header";
import MobileMenu from "@/app/layouts/MobileMenu";
import Mouse from "@/app/layouts/Mouse";
import ProgressBar from "@/app/layouts/ProgressBar";
const Projects = dynamic(() => import("@/app/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("@/app/components/Partners"), {
  ssr: false,
});

const DarkClient = () => {
  useEffect(() => {
    if (document) {
      const body = document.querySelector("body") as Element;
      body.classList.add("dark");
    }

    return () => {
      //   if (document) {
      //     const body = document.querySelector("body") as Element;
      //     body.classList.remove("dark");
      //   }
    };
  }, []);

  return (
    <div>
      <MobileMenu />
      <Header dark={true} />
      <Home dark={true} />
      <About />
      <ExpertAreas />
      <Services />
      <Projects />
      <Feedback dark={true} />
      <Blog />
      <Partners dark={true} />
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
    </div>
  );
};

export default DarkClient;
