import React from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps {
    title?: any;
    hideCloseButton?: boolean;
    onBack?: () => void;
    bodyPadding?: string;
    header?: React.ReactNode;
}
declare const Modal: React.FC<Props>;
export default Modal;
