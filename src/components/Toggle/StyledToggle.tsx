import styled from "styled-components";
import { ToggleProps, scales } from "./types";

const getWidth = ({ scale = scales.MD }: ToggleProps) => {
  switch (scale) {
    case scales.SM:
      return "64px";
    case scales.LG:
      return "96px";
    case scales.MD:
    default:
      return "72px";
  }
};
const getHeight = ({ scale = scales.MD }: ToggleProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
    default:
      return "40px";
  }
};

const getHandleHeight = ({ scale = scales.MD }: ToggleProps) => {
  switch (scale) {
    case scales.SM:
      return 24;
    case scales.LG:
      return 40;
    case scales.MD:
    default:
      return 32;
  }
};

const getHandleScrollPositionOffset = ({ scale = scales.MD }: ToggleProps) => {
  switch (scale) {
    case scales.SM:
      return 30;
    case scales.LG:
      return 48;
    case scales.MD:
    default:
      return 38;
  }
};

export const Handle = styled.div<ToggleProps>`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${getHandleHeight}px;
  left: 4px;
  position: absolute;
  top: 4px;
  transition: left 200ms ease-in;
  width: ${getHandleHeight}px;
  z-index: 1;
`;

export const Input = styled.input<ToggleProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - ${getHandleScrollPositionOffset}px);
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<ToggleProps>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "primary" : "input"]};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${getHeight};
  position: relative;
  transition: background-color 200ms;
  width: ${getWidth};
`;

export default StyledToggle;
