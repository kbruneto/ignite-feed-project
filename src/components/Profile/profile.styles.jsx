import { styled } from "styled-components";
import { theme } from "../../styles/theme";
import { PersonImage } from "../PersonImage";

export const PrincipalContainer = styled.div`
  background-color: ${theme.colors.dark};
  max-width: 256px;
  max-height: 294px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const ContainerNameDesc = styled.div`
  position: absolute;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  width: 85%;
  max-width: 256px;
  word-wrap: break-word;
  gap: 5px;
`;

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

export const ProfileImage = styled(PersonImage)`
  position: relative;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BannerImage = styled.img`
  width: 100%;
  min-height: 72px;
  border-radius: 8px 8px 0 0;
`;

export const ButtonStyle = styled.button`
  width: 192px;
  height: 50px;
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px 14px 24px;
  border-radius: 8px;
  border: 1px solid;
  border-top: 1px solid;
  border-color: ${theme.colors.primary};
  background: transparent;
  font-weight: 700;
  font-size: 16px;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HorizontalLine = styled.div`
  width: 117.5%;
  height: 1px;
  background-color: ${theme.colors.lineColor};
  margin-top: 20px;
  margin-bottom: 20px;
`;
