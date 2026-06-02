import styled from "styled-components";
import {
  breakpoints,
  colors,
  fonts,
  transitions,
} from "../../styles/variables";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${colors.border};
  background: ${colors.background};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavLogo = styled.a`
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  letter-spacing: 2px;
  color: ${colors.primary};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${colors.textMuted};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color ${transitions.normal};

  &:hover {
    color: ${colors.textMain};
  }
`;

export const NavAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  color: ${colors.textDark};
  cursor: pointer;
  user-select: none;
`;
