import React from "react";
import { Login, MagicLogin } from "../WalletModal/types";
interface Props {
    account?: string;
    magicLogin: MagicLogin;
    login: Login;
    logout: () => void;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
