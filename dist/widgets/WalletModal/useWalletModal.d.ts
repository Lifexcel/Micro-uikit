import { Login, MagicLogin } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, magicLogin: MagicLogin, account?: string | undefined) => ReturnType;
export default useWalletModal;
