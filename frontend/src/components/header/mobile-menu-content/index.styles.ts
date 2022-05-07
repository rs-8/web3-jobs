import { styled } from "src/core/styled"

export const MobileMenuContentWrapper = styled.nav`
    display: block;
    visibility: visible;
    width: 100%;
    max-width: 100vw;
    padding: 0 24px 24px 24px;
    background: ${({ theme }) => theme.palette.background};
    z-index: 2000;
    position: fixed;
    left: 0;
    right: 0;
    top: calc(var(--header-height) - 1px);
    bottom: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
`;

export const MobileMenuButtons = styled.div`
    margin: 0;
    padding: 0;
`;

export const MobileMenuButtonItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 0;
    user-select: none;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
`