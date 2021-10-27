import React, { useState, useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, FOOTER_DESKTOP_HEIGHT } from "./config";
import Avatar from "./Avatar";
import * as IconModule from "./icons";
import { SvgProps, BinanceIcon } from "../../components/Svg";

import { Footer } from "./Footer";
import { Tag } from "../../components/Tag";
import getColor from "../../util/getColor";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const { MoonIcon, SunIcon } = Icons;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : -MENU_HEIGHT)}px;
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 1.5px ${({ theme }) => theme.colors.borderColor};
  z-index: ${({ theme }) => theme.zIndices.menu};
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? MENU_HEIGHT + 10 : 0)}px;
  margin-bottom: ${({ isMobile }) => (isMobile ? "20" : FOOTER_DESKTOP_HEIGHT)}px;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED)}px;
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;
const ThemeChangeTab = styled.div`
  display: block;
  margin-right: 10px;
  cursor: pointer;
`;

const CustomWalletInfo = styled(Tag)`
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin: 10px;
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  magicLogin,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
}) => {
  const { isXxl, isXl } = useMatchBreakpoints();
  const isMobile = isXxl === false && isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");
  const walletName = "BSC Mainnet";

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        <Flex style={{ justifyContent: "center", alignItems: "center" }}>
          <CustomWalletInfo variant="tertiary" startIcon={<BinanceIcon color="primary" />}>
            {isMobile ? `${walletName.slice(0, 3)}` : walletName}
          </CustomWalletInfo>

          <ThemeChangeTab onClick={() => toggleTheme(!isDark)}>
            <SunIcon
              style={{ display: isDark ? "block" : "none" }}
              color={getColor("secondary", theme)}
              width="24px"
              key="sun"
            />

            <MoonIcon
              style={{ display: !isDark ? "block" : "none" }}
              color={getColor("secondary", theme)}
              width="24px"
              key="moon"
            />
          </ThemeChangeTab>

          <UserBlock account={account} login={login} magicLogin={magicLogin} logout={logout} isMobile={isMobile} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          priceLink={priceLink}
        />
        <Inner isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      <Footer isDark={isDark} isMobile={isMobile} isPushed={isPushed} />
    </Wrapper>
  );
};

export default Menu;
