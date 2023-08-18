import React, { useRef } from "react";
import useClickOutside from "@/app/hooks/useClickOutside";

interface PopupProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ open, close, children }) => {
  const domNode = useClickOutside(() => {
    close();
  });

  return (
    <div className={`orido_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a className="c-pointer" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
