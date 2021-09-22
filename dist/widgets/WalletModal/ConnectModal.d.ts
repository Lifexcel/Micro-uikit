import React from "react";
import { Login, MagicLogin } from "./types";
interface Props {
    login: Login;
    onDismiss?: () => void;
    magicLogin: MagicLogin;
}
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;
