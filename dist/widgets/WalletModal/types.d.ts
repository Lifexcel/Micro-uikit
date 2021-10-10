import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare type ConnectorId = "authereum" | "fortmatic" | "frame" | "injected" | "portis" | "squarelink" | "torus" | "walletconnect" | "walletlink" | "bsc";
export declare type Login = (connectorId: ConnectorId) => void;
export declare type MagicLogin = (email: string, remember: boolean, loginCallback: (error?: string) => void) => void;
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorId;
}
