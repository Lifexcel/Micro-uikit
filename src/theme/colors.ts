import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffce29",
  primaryBright: "#ffce29",
  primaryDark: "#ffce29",
  secondary: "#013641",
  info: "#1a73e8",
  success: "#31D0AA",
  light: "#ffffff",
  dark: "#000000",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#5e48ff",
  primaryBright: "#4b39cc",
  secondary: "#000",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#353535",
  textDisabled: "#BDC2C4",
  textSubtle: "#5e6161",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  footerShadow: "#b7b1db63",
  footer: "#a8abd1",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#08ffe1",
  secondary: "#ffeffe",
  background: "#01051e",
  backgroundDisabled: "#232427",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#00ccb4",
  tertiary: "#152b36",
  text: "#d1e1e3",
  textDisabled: "#666171",
  textSubtle: "#9ab4b6",
  borderColor: "#524B63",
  card: "#030503",
  footerShadow: "#070d2e",
  footer: "#0c6772",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
