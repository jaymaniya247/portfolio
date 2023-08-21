import Image from "next/image";
import React from "react";

const CopyRight: React.FC = () => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="logo">
              {/* <Image width={159} height={49} src="/img/logo/logo.png" alt="" /> */}
            </div>
            <div className="copy">
              <p>
                © {new Date().getFullYear()} by{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TheNextGen.
                </a>{" "}
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
