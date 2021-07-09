import * as React from "react";

import Svg from "../Svg";
import { SvgProps } from "../types";

interface MicroLogoProps extends SvgProps {
  isDark?: boolean;
}

const MicroLogo: React.FC<MicroLogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" {...props}>
      <defs>
        <path id="prefix__a" d="M86.557 138.339h151.19v31.372H86.557z" />
      </defs>
      <g transform="matrix(.559 0 0 .6 -3.303 -80.517)" strokeLinecap="round" paintOrder="markers fill stroke">
        <circle
          cx={30.908}
          cy={159.193}
          fill={isDark ? "#08ffe1" : "#5e48ff"}
          stroke={isDark ? "#08ffe1" : "#5e48ff"}
          strokeWidth={3.595}
          r={23.202}
        />
        <path
          d="M20.179 146.947a6.583 6.583 0 00-.527.004c-5.487.3-6.775 8.452-12.328 18.112A24.223 25.186 0 009.9 172.2c6.152-3.165 10.08-17.812 14.787-23.902-1.776-.88-3.25-1.309-4.51-1.352zm17.323 0a6.583 6.583 0 00-.527.004c-6.61.36-7.12 12.118-16.345 24.18 10.341 8.025 15.187-14.818 21.382-22.833-1.777-.88-3.25-1.309-4.51-1.352zm14.654.613c-4.714 2.586-6.086 12.959-14.203 23.57 7.837 6.083 12.518-5.557 17.021-15.043a24.223 25.186 0 00-2.818-8.527z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={1.995}
        />
      </g>
      <text
        transform="translate(-54.587 -135.381)"
        fontWeight={700}
        fontSize={22.578}
        fontFamily="Calibri"
        letterSpacing={0.818}
        fill={isDark ? "#08ffe1" : "#5e48ff"}
      >
        <tspan x={86.557} y={158.095}>
          <tspan dx="0 0 0 0 0 0 -0.817563 0.81756502">Microfinance</tspan>
        </tspan>
      </text>
    </Svg>
  );
};

export default MicroLogo;
