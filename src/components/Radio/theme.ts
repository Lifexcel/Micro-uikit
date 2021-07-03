import { darkShadows, lightShadows } from "../../theme/base";
import { darkColors, lightColors } from "../../theme/colors";
import { RadioTheme } from "./types";

export const light: RadioTheme = {
  handleBackground: lightColors.card,
  focusShadow: lightShadows.focus,
};

export const dark: RadioTheme = {
  handleBackground: darkColors.card,
  focusShadow: darkShadows.focus,
};
