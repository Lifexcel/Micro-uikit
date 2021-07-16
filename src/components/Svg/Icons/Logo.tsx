import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <Svg viewBox="0 0 32 32" data-name="Layer-1" {...props} color={theme.colors.primary}>
      <g id="Layer_1">
        <title>Layer 1</title>
        <path
          stroke="null"
          id="svg_2"
          fill={theme.isDark ? theme.colors.analogous : theme.colors.primary}
          d="m25.90588,21.3852a5.53801,5.51937 0 0 1 -7.77928,0l10.10655,-10.10369a4.85521,4.83886 0 0 1 1.45422,-0.99738a14.98,14.92957 0 0 0 -28.66737,6.05442l5.07412,-5.05704a5.54323,5.52456 0 0 1 7.78971,0l-10.11697,10.10369a5.37904,5.36093 0 0 1 -1.42294,0.99998a14.96176,14.91139 0 0 0 28.63609,-6.04663l-5.07412,5.04665zm-11.08645,0a5.53541,5.51677 0 0 1 -7.7871,0l10.14825,-10.10369a5.54323,5.52456 0 0 1 7.78971,0l-10.15085,10.10369z"
          class="cls-2"
        />
      </g>
    </Svg>
  );
};

export default Icon;
