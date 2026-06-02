import { colors, transitions } from "@/styles/variables";
import styled from "styled-components";

export const WCard = styled.div`
  background: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  overflow: hidden;
  transition:
    border-color ${transitions.normal},
    transform ${transitions.normal};

  &:hover {
    border-color: ${colors.borderHover};
    transform: translateY(-2px);
  }
`;

export const WcardTop = styled.div`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid ${colors.border};
`;

export const WcardName = styled.h3`
  font-weight: 500;
  font-size: 15px;
  margin: 0 0 0.15rem 0;
  color: ${colors.textMain};
`;

export const WcardDate = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
`;

export const WcardDesc = styled.p`
  font-size: 13px;
  color: ${colors.textDim};
  margin-top: 0.4rem;
  margin-bottom: 0;
`;

export const WcardBody = styled.div`
  padding: 0.75rem 1.25rem;
`;

export const ExercisePill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.35rem 0;
  border-bottom: 1px solid #222;
  font-size: 13px;

  &:last-child {
    border-bottom: none;
  }
`;

export const PillName = styled.span`
  font-weight: 500;
  color: ${colors.textMain};
`;

export const PillMeta = styled.span`
  color: ${colors.textMuted};
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`;

export const WcardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.25rem;
  border-top: 1px solid ${colors.border};
  background: ${colors.bgSurface};
`;

export const WcardId = styled.span`
  font-size: 12px;
  color: ${colors.textGhost};
`;
