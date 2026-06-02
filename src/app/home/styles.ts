import styled from "styled-components";
import { breakpoints, colors, fonts, transitions } from "@/styles/variables";

export const Hero = styled.section`
  margin-bottom: 2rem;
`;

export const HeroGreeting = styled.p`
  font-size: 12px;
  color: ${colors.textMuted};
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

export const HeroName = styled.h1`
  font-family: ${fonts.heading};
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: 2px;
  line-height: 1;
  color: ${colors.textMain};
  font-weight: 400;
  margin: 0;

  span {
    color: ${colors.primary};
  }
`;

export const StatsStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`;
