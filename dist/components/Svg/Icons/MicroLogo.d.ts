import * as React from "react";
import { SvgProps } from "../types";
interface MicroLogoProps extends SvgProps {
    isDark?: boolean;
}
declare const MicroLogo: React.FC<MicroLogoProps>;
export default MicroLogo;
