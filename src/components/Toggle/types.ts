import { InputHTMLAttributes } from "react";

export type ToggleTheme = {
  handleBackground: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export type ToggleProps = { scale?: Scales } & InputHTMLAttributes<HTMLInputElement>;
