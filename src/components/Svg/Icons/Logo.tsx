import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      {/* <image width="32" height="32" href="/images/egg/logo.png"/> 
      */}
      <defs
        id="defs2">
        <rect
          x="86.556549"
          y="138.33929"
          width="151.19048"
          height="31.372025"
          id="rect849" />
      </defs>

      <g
        id="layer1"
        transform="translate(-24.500374,-144.27052)">
        <g
          id="g859"
          transform="matrix(0.5590066,0,0,0.6000065,21.197589,63.753586)">
          <ellipse
            style={{ fill: "#00ffff", stroke: "#00ffff", strokeWidth: 3.59541, strokeLinecap: "round", paintOrder: "markers fill stroke" }}
            id="ellipse880"
            cx="30.908314"
            cy="159.19344"
            rx="23.202297"
            ry="23.202295" />
          <path
            id="ellipse929"
            style={{ fill: "#ffffff", stroke: "#ffffff", strokeWidth: 1.99498, strokeLinecap: "round", strokeMiterlimit: 4, strokeDasharray: "none", paintOrder: "markers fill stroke" }}
            d="m 20.178814,146.94686 c -0.179956,-0.006 -0.355463,-0.004 -0.526947,0.004 -5.486539,0.29931 -6.774958,8.45205 -12.3283449,18.1117 a 24.223292,25.185895 0 0 0 2.5778159,7.13794 c 6.15173,-3.1655 10.080009,-17.8126 14.786479,-23.90246 -1.77612,-0.88035 -3.249299,-1.30864 -4.509003,-1.35185 z m 17.322796,0 c -0.179954,-0.006 -0.355463,-0.004 -0.526949,0.004 -6.609982,0.36057 -7.120251,12.11768 -16.345141,24.17921 10.341494,8.02589 15.187882,-14.81717 21.382062,-22.83203 -1.776119,-0.88035 -3.250267,-1.30864 -4.509972,-1.35185 z m 14.654262,0.61328 c -4.71404,2.58625 -6.086268,12.95854 -14.202589,23.57059 7.837045,6.08221 12.517452,-5.55782 17.020717,-15.04342 a 24.223292,25.185895 0 0 0 -2.818128,-8.52717 z" />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
