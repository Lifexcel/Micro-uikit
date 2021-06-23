import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/images/grap.png" className="icon_sidebar" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}} />
  );
};

export default Icon;
