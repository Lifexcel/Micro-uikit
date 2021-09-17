import React from "react";
import styled from "styled-components";
// import { Link } from "../../components/Link";
// import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login, MagicLogin } from "./types";
import { Text } from "../../components/Text";
import { Flex } from "../../components/Flex";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

interface Props {
  login: Login;
  onDismiss?: () => void;
  magicLogin: MagicLogin;
}

// const HelpLink = styled(Link)`
//   display: flex;
//   align-self: center;
//   align-items: center;
//   margin-top: 24px;
// `;

const ConnectModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 720px;

  .connect-options {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 5px;
  }

  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    position: relative;

    &:after {
      content: "";
      left: 30%;
      bottom: -5px;
      position: absolute;
      width: 40%;
      height: 1px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  .magic-login {
    margin-top: 0.5rem;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row-reverse;
    .magic-login {
      margin-right-: 5px;
      padding-right: 5px;
    }
    .connect-options {
      grid-template-columns: auto auto;
      grid-gap: 5px;
    }
  }
`;

const MagicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin: 0 0.5rem;
    .email-input {
      margin-bottom: 1rem;
    }
  }
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, magicLogin }) => {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Modal header={<></>} onDismiss={onDismiss}>
      <ConnectModalWrapper className="connect-modal-wrapper">
        <Flex flexDirection="column" justifyContent="center">
          <Text className="title" fontSize="20px" bold>
            Connect to a wallet
          </Text>
          <div className="connect-options">
            {config.map((entry, index) => (
              <WalletCard
                key={entry.title}
                login={login}
                walletConfig={entry}
                onDismiss={onDismiss}
                mb={index < config.length - 1 ? "8px" : "0"}
              />
            ))}
          </div>
        </Flex>

        <MagicWrapper className="magic-login">
          <Text className="title" fontSize="20px" bold>
            Signup / Login
          </Text>
          <form>
            <Input
              name="email"
              type="email"
              className="email-input"
              value={email}
              onChange={(e) => {
                setIsLoading(false);
                setEmail(e?.target?.value);
              }}
              required
            />
            <Button
              type="button"
              fullWidth
              isLoading={isLoading}
              onClick={async (e: any) => {
                e.preventDefault();
                if (!isLoading) {
                  setIsLoading(true);
                  if (magicLogin) await magicLogin("ada");
                  setIsLoading(false);
                }
              }}
            >
              Signup / Login
            </Button>
            <Text color="text" fontSize="11px" mt="1rem" style={{ textAlign: "justify" }}>
              You will receive an email once you Login or Signup
            </Text>
          </form>
        </MagicWrapper>
      </ConnectModalWrapper>

      {/* <HelpLink */}
      {/*  href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain" */}
      {/*  external */}
      {/* > */}
      {/*  <HelpIcon color="primary" mr="6px" /> */}
      {/*  Learn how to connect */}
      {/* </HelpLink> */}
    </Modal>
  );
};

export default ConnectModal;
