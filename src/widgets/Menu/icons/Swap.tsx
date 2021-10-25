import React from "react";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <img
      src="/images/grap.png"
      className="icon_sidebar"
      data-nsfw-filter-status="sfw"
      style={{ visibility: "visible" }}
      alt="grap"
    />
  );
};

export default Icon;
