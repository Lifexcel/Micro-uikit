import React from "react";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, scale = "sm", ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle checked={isChecked} scale={scale}>
      <Input checked={checked} {...props} type="checkbox" scale={scale} />
      <Handle scale={scale} />
    </StyledToggle>
  );
};

export default Toggle;
