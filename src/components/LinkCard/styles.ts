import { colors, transitions } from "@/styles/variables";
import styled from "styled-components";

export const LinksCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 120px;
  border: 1px dashed ${colors.border};
  border-radius: 12px;
  color: ${colors.textGhost};
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  transition:
    border-color ${transitions.normal},
    color ${transitions.normal},
    background ${transitions.normal};

  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
    background: rgba(232, 255, 71, 0.03);
  }
`;
