import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: lightColors.primaryBright,
    backgroundHover: lightColors.primaryBright,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: lightColors.light,
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `2px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [DANGER]: {
    background: lightColors.failure,
    backgroundActive: "#D43285", // darkten 10%
    backgroundHover: "#FF65B8", // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.light,
  },
  [SUBTLE]: {
    background: lightColors.textSubtle,
    backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${lightColors.textSubtle}B3`, // 85% opacity`
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.light,
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.light,
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
    background: darkColors.primary,
    color: darkColors.dark,
    backgroundHover: darkColors.primaryDark,
    backgroundActive: darkColors.primaryDark,
  },
  [SECONDARY]: {
    ...light.secondary,
    border: `2px solid ${darkColors.primary}`,
    borderColorHover: darkColors.primaryDark,
    color: darkColors.primary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    color: darkColors.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
    color: darkColors.dark,
  },
  [SUBTLE]: {
    ...light.subtle,
    background: darkColors.textSubtle,
    backgroundActive: `${darkColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${darkColors.textSubtle}B3`, // 85% opacity`
    color: darkColors.dark,
  },
  [SUCCESS]: {
    ...light.success,
    color: darkColors.dark,
  },
};
