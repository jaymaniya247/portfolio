import React, { useEffect } from "react";
import Head from "next/head";
import ImageView from "../components/popup/ImgViews";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataImage,
  hashtag_,
  imgToSVG,
  scrollSection,
  stickyNav,
} from "../utilits";
import PreLoader from "./PreLoader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    <React.Fragment>
      <Head>
        <title>Orido | Home</title>
      </Head>
      <PreLoader />
      <Image width={1000} height={1000} View />
      <VideoPopup />
      <div className="orido_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
