import React from "react";
import Popup from "./Popup";
import Image from "next/image";

interface ServicePopupProps {
  data: {
    img: string;
    name: string;
    description: string[];
  };
  open: boolean;
  close: () => void;
}

const ServicePopup: React.FC<ServicePopupProps> = ({ data, open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="image">
          <Image width={1000} height={400} src="/img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data.img}
            style={{ backgroundImage: `url(${data.img})` }}
          />
        </div>
        <div className="main_title">
          <h3>{data.name}</h3>
        </div>
        <div className="descriptions">
          {data &&
            data.description &&
            data.description.map((des, i) => <p key={i}>{des}</p>)}
        </div>
      </div>
    </Popup>
  );
};

export default ServicePopup;
