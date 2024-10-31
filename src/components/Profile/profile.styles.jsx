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
  margin-bottom: 16px;
`;

export const ButtonStyle = styled.button`
  width: 192px;
  height: 50px;
  position: absolute;
  top: 212px;
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
  margin-top: 20px; /* Aumenta o espaço entre o texto e a linha */
`;
