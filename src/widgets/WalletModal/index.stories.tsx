import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Flex/Flex";
import useWalletModal from "./useWalletModal";

export default {
  title: "Widgets/WalletModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    () => null,
    () => null,
    (email: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("signing in", email);
          resolve(1);
        }, 1000);
      });
    },
    "0xbdda50183d817c3289f895a4472eb475967dc980"
  );
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open connect modal</Button>
      <Button onClick={onPresentAccountModal}>Open account modal</Button>
    </Flex>
  );
};
