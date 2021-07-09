import styled from "styled-components";
import React from 'react'
import { Link } from '../../components/Link';
import { FOOTER_MOBILE_HEIGHT, FOOTER_DESKTOP_HEIGHT, socials } from './config';

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
                                background:${({ theme }) => theme.colors.footer};
                                color:${({ theme }) => theme.colors.primary};
                                flex-direction:${isMobile ? 'column' : 'row-reverse'};
                                justify-content: center;
                                align-items:center;
                                width:100%;
                                height:${isMobile ? FOOTER_MOBILE_HEIGHT : FOOTER_DESKTOP_HEIGHT};
                                position:fixed;
                                z-index:15;
                                left:0;
                                bottom:0px;
                                padding:10px;
                                margin:10px 0 0 0;
                                `;
    const SocialWrapper = styled.div`
                                 display:flex;
                                 padding:10px;
                                 justify-content:center;
                                 align-items:center;
                                    `
    return (
        <StyledFooter>
            <SocialWrapper >
                {
                    socials.map((social, index) => {
                        const Icon = Icons[social.icon];
                        const iconProps = { width: "24px", color: "primary", style: { cursor: "pointer" } };
                        const mr = index < socials.length - 1 ? "5px" : "0";

                        return (
                            <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                                <Icon {...iconProps} />
                            </Link>
                        );
                    })
                }
            </SocialWrapper>
            <p className="ps-2">
                Made With <span className="text-red">❤️</span> In Hong Kong &copy; 2020 Kash Finance. All
                Rights Reserved
            </p>
        </StyledFooter>
    )
}

export default Footer;