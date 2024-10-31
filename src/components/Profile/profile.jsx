import {
  TextName,
  DescriptionPeople,
  ProfileImage,
  BannerImage,
  ButtonStyle,
  PrincipalContainer,
  HorizontalLine,
} from "./profile.styles";
import BannerPlants from "../../assets/banner-plants.svg";
import PencilVector from "../../assets/Pencil Vector.svg";

export function Profile() {
  return (
    <PrincipalContainer>
      <BannerImage src={BannerPlants} />
      <ProfileImage
        src="https://i.pravatar.cc/1000?img=32"
        alt="Imagem de perfil de Leslie Alexander"
      />
      <TextName>Leslie Alexander</TextName>
      <DescriptionPeople>UI Designer</DescriptionPeople>
      <HorizontalLine />
      <ButtonStyle>
        <img src={PencilVector} alt="Ícone de lápis" />
        Editar seu perfil
      </ButtonStyle>
    </PrincipalContainer>
  );
}
