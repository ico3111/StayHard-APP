import styled, { createGlobalStyle } from "styled-components";
import { colors, fonts, transitions, breakpoints } from "./variables";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
`;

export const Col = styled.div<{ md?: number }>`
  padding-left: 12px;
  padding-right: 12px;
  flex: ${({ md }) => (md ? `0 0 ${(md / 12) * 100}%` : "1")};
  max-width: ${({ md }) => (md ? `${(md / 12) * 100}%` : "100%")};

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  padding: 2rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 1rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${fonts.heading};
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  color: ${colors.textMain};
  font-weight: 400;
  margin: 0;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.border};
  margin: 0 0 2rem;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 380px;
  background: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 1.25rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  color: #b3b3b3;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  background: ${colors.background};
  border: 1px solid ${colors.bgBadge};
  border-radius: 10px;
  color: ${colors.textMain};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;
`;

export const FormSelect = styled.select`
  background: ${colors.bgBadge};
  color: ${colors.textMain};
  border: 1px solid ${colors.border};
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-size: 14px;
  font-family: ${fonts.body};
  width: 100%;
  appearance: none;
  cursor: pointer;
  transition: border-color ${transitions.normal};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const RemoveBtn = styled.button`
  font-size: 12px;
  color: ${colors.danger};
  cursor: pointer;
  background: none;
  border: none;
  font-family: ${fonts.body};
  font-weight: 500;
  padding: 0;
  transition: color ${transitions.normal};

  &:hover {
    color: ${colors.dangerHover};
  }
`;

export const LinkBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${colors.primary};
  color: ${colors.textDark};
  border: none;
  border-radius: 8px;
  padding: 0.45rem 0.9rem;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: ${fonts.body};
  text-decoration: none;
  transition:
    background ${transitions.normal},
    transform ${transitions.fast};

  &:hover {
    background: ${colors.primaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
