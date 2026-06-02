import { colors, fonts, transitions } from "@/styles/variables";
import styled from "styled-components";

export const StatCard = styled.div`
  background: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  transition: border-color ${transitions.normal};

  &:hover {
    border-color: ${colors.borderHover};
  }
`;

export const StatLabel = styled.div`
  font-size: 11px;
  color: ${colors.textMuted};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 0.25rem;
`;

export const StatValue = styled.div`
  font-family: ${fonts.heading};
  font-size: 2.2rem;
  letter-spacing: 1px;
  line-height: 1;
  color: ${colors.primary};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.border};
  margin: 0 0 2rem;
`;
