import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const TextHeader = styled.h1`
  margin: 0;
  color: ${theme.colors.text};
  font-size: 26px;
`;

export const HeaderBG = styled.div`
  height: 100px;
  width: 100vw;
  background-color: ${theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const LogoImage = styled.img`
  display: inline-block;
  vertical-align: middle;
`;
