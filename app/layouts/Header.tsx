import Image from "next/image";
import React from "react";

interface HeaderProps {
  dark?: boolean;
}

const Header: React.FC<HeaderProps> = ({ dark }) => {
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          {/* <a href="#">
            <Image
              width={159}
              height={48}
              src={`/img/logo/${dark ? "light" : "logo"}.png`}
              alt=""
            />
          </a> */}
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
      </div>
    </div>
  );
};

export default Header;
