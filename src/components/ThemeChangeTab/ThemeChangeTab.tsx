import React from "react";
import styled from "styled-components";
import * as IconModule from "../../widgets/Menu/icons";
import { SvgProps } from "../Svg";
import { ThemeChangeTabProps } from "./types";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const { MoonIcon, SunIcon } = Icons;

const StyledThemeChangeTab = styled.div`
  display: block;
  margin: 0 10px 0 0;
  cursor: pointer;
`;

const ThemeChangeTab = ({ toggleTheme, isDark }: ThemeChangeTabProps) => {
  return (
    <StyledThemeChangeTab onClick={() => toggleTheme(!isDark)}>
      <SunIcon color="secondary" width="24px" style={{ display: isDark ? "block" : "none" }} key="sun" />
      <MoonIcon color="secondary" width="24px" style={{ display: !isDark ? "block" : "none" }} key="moon" />
    </StyledThemeChangeTab>
  );
};

export default ThemeChangeTab;
