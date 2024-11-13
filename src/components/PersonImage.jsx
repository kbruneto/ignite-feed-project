import { styled } from "styled-components";
import { theme } from "../styles/theme";

export const PersonImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 2px solid;
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.dark};
  margin-bottom: 16px;
  padding: 3px;
`;
