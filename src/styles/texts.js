import { styled } from "styled-components";
import { theme } from "./theme";

export const TextName = styled.p`
  color: ${theme.colors.text};
  font-size: 16px;
  font-weight: 700;
`;

export const DescriptionPeople = styled.p`
  color: ${theme.colors.darkText};
  font-size: 14px;
  font-weight: 400;
`;

export const TextSpan = styled.p`
  color: ${theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  line-height: 25.6px;
`;

export const StyledTextPost = styled.p`
  color: ${theme.colors.textPostColor};
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
`;
