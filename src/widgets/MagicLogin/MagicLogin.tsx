import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styled from "styled-components";
import {MaLogin} from "./types";

interface Props {
    magicLogin: (email: string) => MaLogin;
    email: string;
}

const MagicLoginInput = styled(Input)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 10px;
`;

const MagicLoginButton = styled(Button)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 10px;
`;

const MagicLogin: React.FC<Props> = (email, magicLogin) => (
    <div>
        <MagicLoginInput type="email" placeholder="Email..." />
        <MagicLoginButton
            onClick={() => {
            magicLogin(email);
            console.log(`Magic Login from MicroUI = ${email}`);
    }}
>
    Magic Login
        </MagicLoginButton>
    </div>
);

export default MagicLogin;
