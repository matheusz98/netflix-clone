import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${({ scrollNav }) => (scrollNav ? "#0c0c0c" : "transparent")};
  z-index: 999;
  padding: 0 30px;
  transition: 0.3s ease-in-out;
`;

export const HeaderLogo = styled.div`
  height: 30px;
`;

export const HeaderLink = styled.a`
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 100%;
  border-radius: ${({ alt }) => (alt === "User" ? 3 : 0)}px;
`;

export const HeaderUser = styled.div`
  height: 35px;
`;

export const HeaderProfile = styled.a`
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  height: 100%;
  border-radius: ${({ alt }) => (alt === "User" ? 3 : 0)}px;
`;
