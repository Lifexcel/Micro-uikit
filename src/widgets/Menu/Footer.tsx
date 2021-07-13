import styled from "styled-components";
import React from "react";
import { Link } from "../../components/Link";
import { FOOTER_MOBILE_HEIGHT, FOOTER_DESKTOP_HEIGHT, socials } from "./config";
import * as IconModule from "./icons";
import { SvgProps } from "../../components/Svg";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
interface Props {
  isDark: boolean;
  isMobile: boolean;
}

export const Footer: React.FC<Props> = ({ isMobile }: Props) => {
  const StyledFooter = styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.primary};
    flex-direction: ${isMobile ? "column" : "row-reverse"};
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 600;
    width: auto;
    height: ${isMobile ? FOOTER_MOBILE_HEIGHT : FOOTER_DESKTOP_HEIGHT}px;
    position: ${isMobile ? "absolute" : "fixed"};
    z-index: ${isMobile ? 5 : 15};
    left: 0px;
    right: 0px;
    bottom: ${isMobile ? "none" : "0"};
    padding: 15px 10px;
    margin: 10px -1rem 0 -1rem;
  `;
  const SocialWrapper = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
  `;
  return (
    <StyledFooter>
      <SocialWrapper>
        {socials.map((social, index) => {
          const Icon = Icons[social.icon];
          const iconProps = { width: "24px", color: "primary", style: { cursor: "pointer" } };
          const mr = index < socials.length - 1 ? "5px" : "0";

          return (
            <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
              <Icon {...iconProps} />
            </Link>
          );
        })}
      </SocialWrapper>
      <p className="ps-2">
        Made With <span className="text-red">❤️</span> In Hong Kong &copy; 2020 Micro Finance. All Rights Reserved
      </p>
    </StyledFooter>
  );
};

export default Footer;
