import styled from "styled-components";
import { theme } from "../../styles/theme";
import { PersonImage } from "../../styles/PersonImage";

export const ContainerMain = styled.div`
  width: 832px;
  min-height: 621px;
  border-radius: 8px;
  background-color: ${theme.colors.dark};
  display: flex;
  padding: 40px;
  flex-direction: column;
`;

export const PostImage = styled(PersonImage)`
  transform: none;
  margin: 0;
`;

export const Person = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Specs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Publication = styled.div`
  height: 206px;
  width: 100%;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextPost = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.lineColor};
  margin-bottom: 24px;
`;

export const Feedback = styled.div`
  width: 100%;
  height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputPost = styled.textarea`
  width: 100%;
  height: 96px;
  background-color: ${theme.colors.black};
  padding: 13px 16px;

  color: ${theme.colors.textPostColor};
  font-weight: 400;
  font-size: 16px;

  border-radius: 8px;
  border: 1px ${theme.colors.primary} solid;
  resize: none;

  &::placeholder {
    color: ${theme.colors.textPlaceHolder};
    opacity: 0.6;
  }
`;

export const PostButton = styled.button`
  width: 108px;
  height: 49px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.buttonGreen};

  color: #fff;
  font-weight: 700;
`;
