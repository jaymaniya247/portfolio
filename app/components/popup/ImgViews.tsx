import React, { Fragment, useEffect, useState, useRef } from "react";
import useClickOutside from "@/app/hooks/useClickOutside";
import Image from "next/image";

interface ImgViewsProps {
  close: (value: boolean) => void;
  src: string | null;
}

const ImgViews: React.FC<ImgViewsProps> = ({ close, src }) => {
  const domNode = useClickOutside(() => {
    close(false);
  });

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className={`mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <Image
                width={1000}
                height={1000}
                className="mfp-img"
                src={src || ""}
                alt="Image"
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView: React.FC = () => {
  const [img, setImg] = useState<boolean>(false);
  const [imgValue, setImgValue] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const aElements = document.querySelectorAll("a");
      aElements.forEach((a) => {
        if (a.href.includes("/img/") && a.getAttribute("download") === null) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            setImgValue(a.href);
            setImg(true);
          });
        }
      });
    }, 1500);
  }, []);

  return (
    <Fragment>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
    </Fragment>
  );
};

export default ImageView;
