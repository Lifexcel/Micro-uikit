import { InputHTMLAttributes } from "react";
export declare type ToggleTheme = {
    handleBackground: string;
};
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export declare type Scales = typeof scales[keyof typeof scales];
export declare type ToggleProps = {
    scale?: Scales;
} & InputHTMLAttributes<HTMLInputElement>;
