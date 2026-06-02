import styled, { css } from "styled-components";
import { ButtonVariant } from "./../../lib/types";

const VARIANT_COLORS = {
  primary: { bg: "#08e05b", text: "#fff" },
  success: { bg: "#0070f3", text: "#fff" },
  danger: { bg: "#ff0000", text: "#fff" },
  warning: { bg: "#f5a623", text: "#fff" },
  outline: { bg: "transparent", text: "#0070f3" },
};

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition:
    filter 0.2s,
    transform 0.1s;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ $variant }) => {
    const { bg, text } = VARIANT_COLORS[$variant] || VARIANT_COLORS.primary;
    return css`
      background-color: ${bg};
      color: ${text};
      border-color: ${"transparent"};
    `;
  }}

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
