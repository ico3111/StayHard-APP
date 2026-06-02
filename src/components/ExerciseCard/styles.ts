import styled from "styled-components";
import { colors, transitions } from "../../styles/variables";

export const ExCard = styled.div`
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

export const ExHeader = styled.div`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid ${colors.border};
`;

export const ExName = styled.h3`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.textMain};
  margin: 0;
`;

export const ExBody = styled.div`
  padding: 0.75rem 1.25rem;
  display: flex;
  gap: 8px;
`;

export const ExBadge = styled.div`
  background: ${colors.bgBadge};
  border: 1px solid ${colors.border};
  border-radius: 6px;
  padding: 0.25rem 0.6rem;
  font-size: 12px;
  color: ${colors.textMuted};

  span {
    color: ${colors.textMain};
    font-weight: 500;
  }
`;

export const ExFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  border-top: 1px solid ${colors.border};
  background: ${colors.bgSurface};
`;
