import React from "react";
import noop from "lodash/noop";
import { BrowserRouter } from "react-router-dom";
import { LangType } from "./types";
import { links } from "../Menu/config";
import { Dashboard } from "./Dashboard";
import { Menu } from "../Menu";
import { Profile } from "../Menu/types";

export default {
  title: "Widgets/Dashboard",
  component: Dashboard,
  argTypes: {},
};

const langs: LangType[] = [...Array(20)].map((_, i) => ({ code: `en${i}`, language: `English${i}` }));

const fakeProfile = {
  username: "pancakeswap",
  image:
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/tiger_shroff_0.png?qMIrZn27cP8pqFXpOXoDacJphGoxa_3c&size=770:433",
  profileLink: "/profile",
  noProfileLink: "/no-profile",
} as Profile;

export const DashboardMain: React.FC = () => {
  const magicLogin = async (email: string) => {
    console.log(email);
    return 1;
  };

  return (
    <BrowserRouter>
      <Menu
        account="0xbdda50183d817c3289f895a4472eb475967dc980"
        login={noop}
        magicLogin={magicLogin}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang="EN"
        cakePriceUsd={0.23158668932877668}
        links={links}
        profile={fakeProfile}
        priceLink=""
      >
        <Dashboard profile={fakeProfile} />
      </Menu>
    </BrowserRouter>
  );
};
