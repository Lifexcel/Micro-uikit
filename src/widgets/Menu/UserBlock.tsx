import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login, MagicLogin } from "../WalletModal/types";

interface Props {
  account?: string;
  magicLogin: MagicLogin;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, magicLogin }: Props) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, magicLogin, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
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
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

UserBlock.defaultProps = {
  account: undefined,
};

export default UserBlock;
