import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 190 43" {...props}>
      <image width="125" height="43" href={isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;
