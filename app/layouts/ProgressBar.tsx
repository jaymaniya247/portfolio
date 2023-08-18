"use client";

import React, { useEffect } from "react";
import { scrollTop } from "../utils/utils";

const ProgressBar: React.FC = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  return (
    <div className="progressbar">
      <a href="#">
        <span className="text" style={{ bottom: "150.75px" }}>
          To Top
        </span>
      </a>
      <span className="line" />
    </div>
  );
};

export default ProgressBar;
