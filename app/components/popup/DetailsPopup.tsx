import React from "react";
import Popup from "./Popup";
import Image from "next/image";

export interface ProjectDataType {
  name: string;
  HeaderImage: string;
  images: string[] | null;
  description: string[];
  client: string;
  category: string;
  date: string;
}

interface DetailsPopupProps {
  open: boolean;
  close: () => void;
  ProjectData: ProjectDataType;
}

const DetailsPopup: React.FC<DetailsPopupProps> = ({
  open,
  close,
  ProjectData,
}) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        {ProjectData.HeaderImage ? (
          <>
            <div className="top_image">
              <Image
                width={1000}
                height={400}
                src={ProjectData.HeaderImage}
                alt=""
              />
              <div
                className="main"
                data-img-url={ProjectData.HeaderImage}
                style={{
                  backgroundImage: `url(${ProjectData.HeaderImage})`,
                  objectFit: "contain",
                }}
              />
            </div>
          </>
        ) : null}
        <div className="portfolio_main_title">
          <h3>{ProjectData.name}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              {ProjectData.category}
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            {ProjectData.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>{ProjectData.client}</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#"> {ProjectData.category}</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>{ProjectData.date}</span>
              </li>
            </ul>
          </div>
        </div>
        {ProjectData.images ? (
          <div className="additional_images">
            <ul>
              {ProjectData.images.map((img, index) => (
                <li key={index}>
                  <div className="list_inner">
                    <div className="my_image">
                      <Image
                        width={1000}
                        height={300}
                        src={img}
                        alt=""
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          opacity: 1,
                        }}
                      />
                      <div className="main" data-img-url={img} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </Popup>
  );
};

export default DetailsPopup;
