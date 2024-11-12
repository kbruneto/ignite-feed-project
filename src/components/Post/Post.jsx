import { ProfileImage } from "../Profile/profile.styles";
import {
  ContainerMain,
  Person,
  Publication,
  Line,
  Feedback,
} from "./post.styles";

export function Post() {
  return (
    <>
      <ContainerMain>
        <Person>
          <ProfileImage
            src="https://i.pravatar.cc/1000?img=35"
            alt="Imagem de perfil de Jane Cooper"
          />
        </Person>

        <Publication></Publication>
        <Line></Line>
        <Feedback></Feedback>
      </ContainerMain>
    </>
  );
}
