import React from "react";
import styled from "styled-components";
import { size, sizePlus } from "../utils/size";

const StyledHeader = styled.header`
    width: 100%;
    border-bottom: 1px solid #e2e5ec;
    background-color: #f4f5f9;
`;

const HeaderInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${size(24)} ${size(80)};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
        padding: ${sizePlus(16)} ${sizePlus(20)};
    }
`;

const Name = styled.span`
    font-weight: 700;
    font-size: ${size(18)};
    color: #42567a;
    letter-spacing: 0.02em;

    @media (max-width: 1024px) {
        font-size: ${sizePlus(14)};
    }
`;

const LinkedInLink = styled.a`
    font-size: ${size(14)};
    color: #3877ee;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;

    &:hover {
        border-color: #3877ee;
    }

    @media (max-width: 1024px) {
        font-size: ${sizePlus(12)};
    }
`;

const Header: React.FC = () => (
    <StyledHeader>
        <HeaderInner>
        <Name>Anna Baidikova</Name>
        <LinkedInLink
            href="https://www.linkedin.com/in/anna-baidikova/"
            target="_blank"
            rel="noopener noreferrer"
        >
            LinkedIn
        </LinkedInLink>
        </HeaderInner>
    </StyledHeader>
);

export default Header;
