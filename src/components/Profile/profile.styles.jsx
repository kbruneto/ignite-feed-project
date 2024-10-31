import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const PrincipalContainer = styled.div`
  background-color: ${theme.colors.dark};
  width: 256px;
  height: 294px;
  border-radius: 8px;
  position: relative;
  top: 32px;
  left: 160px; // 160px, pois ainda não há o container dos posts, e não vi outra maneira de alinhar a não ser essa. Pretendo mudar futuramente, para que haja uma melhor responsividade.
`;

export const TextName = styled.p`
  color: ${theme.colors.text};
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  position: absolute;
  top: 116px;
  left: 50%;
  transform: translateX(-50%);
`;

export const DescriptionPeople = styled.p`
  color: ${theme.colors.darkText};
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  position: absolute;
  top: 142px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BannerImage = styled.img`
  position: absolute;
  width: 256px;
  height: 72px;
  border-radius: 8px 8px 0 0;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  padding: 2px;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  border: 2px solid;
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.dark};
`;

export const ButtonStyle = styled.button`
  width: 192px;
  height: 50px;
  position: absolute;
  top: 212px;
  left: 32px;
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
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.lineColor};
  margin: 24px 0;
  position: absolute;
  top: 150px;
`;
