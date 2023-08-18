"use client";

import React, { useEffect } from "react";
import { customCursor } from "../utils/utils";

const Mouse: React.FC = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </>
  );
};

export default Mouse;
