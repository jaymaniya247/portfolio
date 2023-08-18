"use client";

import { useEffect } from "react";
import {
  dataImage,
  hashtag_,
  imgToSVG,
  scrollSection,
  stickyNav,
} from "../utils/utils";
import PreLoader from "./PreLoader";
import ImageView from "../components/popup/ImgViews";
import VideoPopup from "../components/popup/VideoPopup";

const UtilsLoader = () => {
  useEffect(() => {
    imgToSVG();
    dataImage();
    hashtag_();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
    return () => {
      window.removeEventListener("scroll", stickyNav);
      window.removeEventListener("scroll", scrollSection);
    };
  }, []);

  return (
    <div>
      <PreLoader />
      <ImageView />
      <VideoPopup />
    </div>
  );
};

export default UtilsLoader;
