"use client";

import Image from "next/image";
import Link from "next/link";

const MainPage = () => {
  return (
    <div className="orido_tm_intro">
      <div className="short_info">
        {/* <Image width={159} height={49} src="/img/logo/logo.png" alt="" /> */}
        <h3>Jay&apos;s React Nextjs Portfolio</h3>
      </div>
      <span className="intro_line" />
      <span className="intro_line_2" />
      <span className="intro_line_3" />
      <div className="demos">
        <div className="left">
          <div className="desc">
            <Image
              width={1000}
              height={378}
              src="/img/light.png"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <h3 className="title">Light</h3>
          </div>
          <Link
            className="intro_link"
            href="/modes/light"
            target="_blank"
            rel="noreferrer"
          />
        </div>
        <div className="right">
          <div className="desc">
            <Image
              width={1000}
              height={378}
              src="/img/dark.png"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <h3 className="title">Dark</h3>
          </div>
          <Link
            className="intro_link"
            href="/modes/dark"
            target="_blank"
            rel="noreferrer"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
