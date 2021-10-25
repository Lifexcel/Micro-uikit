import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login, MagicLogin } from "../WalletModal/types";

interface Props {
  account?: string;
  magicLogin: MagicLogin;
  login: Login;
  logout: () => void;
  isMobile: boolean;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, magicLogin, isMobile }: Props) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, magicLogin, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  const StyledConnectButton = styled(Button)`
    padding-inline: ${isMobile ? "0.5rem" : "1rem"};
  `;
  return (
    <div>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <StyledConnectButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </StyledConnectButton>
      )}
    </div>
  );
};

UserBlock.defaultProps = {
  account: undefined,
};

export default UserBlock;
