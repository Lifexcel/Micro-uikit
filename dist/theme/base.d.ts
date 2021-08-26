import { MediaQueries, Breakpoints, Spacing, ZIndices } from "./types";
export declare const breakpointMap: {
    [key: string]: number;
};
export declare const shadows: {
    level1: string;
    active: string;
    success: string;
    warning: string;
    focus: string;
    inset: string;
};
export declare const lightShadows: {
    active: string;
    focus: string;
    inset: string;
    level1: string;
    success: string;
    warning: string;
};
export declare const darkShadows: {
    active: string;
    focus: string;
    inset: string;
    level1: string;
    success: string;
    warning: string;
};
declare const _default: {
    siteWidth: number;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    shadows: {
        level1: string;
        active: string;
        success: string;
        warning: string;
        focus: string;
        inset: string;
    };
    radii: {
        small: string;
        default: string;
        card: string;
        circle: string;
    };
    zIndices: ZIndices;
};
export default _default;
