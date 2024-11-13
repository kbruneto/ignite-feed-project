import styled from "styled-components";
import { theme } from "../../styles/theme";
import { PersonImage } from "../PersonImage";

export const ContainerMain = styled.div`
  width: 832px;
  height: 621px;
  border-radius: 8px;
  background-color: ${theme.colors.dark};
`;

export const PostImage = styled(PersonImage)`
  top: 0;
  left: 0;
  transform: none;
  margin: 0;
`;

export const Person = styled.div``;

export const Publication = styled.div``;

export const Line = styled.div``;

export const Feedback = styled.div``;
