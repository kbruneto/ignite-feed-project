import {
  DescriptionPeople,
  StyledTextPost,
  TextName,
  TextSpan,
} from "../../styles/texts";
import {
  ContainerMain,
  Person,
  Publication,
  Line,
  Feedback,
  PostImage,
  ContainerLeft,
  Specs,
  ContainerRight,
  TextPost,
  PostButton,
  InputPost,
} from "./post.styles";

export function Post({ name }) {
  return (
    <>
      <ContainerMain>
        <Person>
          <ContainerLeft>
            <PostImage
              src="https://i.pravatar.cc/1000?img=35"
              alt="Imagem de perfil de Jane Cooper"
            />
            <Specs>
              <TextName>{name}</TextName>
              <DescriptionPeople>Dev Front-End</DescriptionPeople>
            </Specs>
          </ContainerLeft>
          <ContainerRight>
            <DescriptionPeople>Publicado há 1h</DescriptionPeople>
          </ContainerRight>
        </Person>

        <Publication>
          <TextPost>
            <StyledTextPost> Fala galeraa 👋 </StyledTextPost>
            <StyledTextPost>
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz para meu desenvolvimento na LM Tech. O nome do projeto é
              Ignite Feed Project 🚀
            </StyledTextPost>
            <TextSpan>👉 jane.design/doctorcare </TextSpan>
            <TextSpan> #novoprojeto #nlw #rocketseat </TextSpan>
          </TextPost>
        </Publication>

        <Line></Line>

        <Feedback>
          <TextName>Deixe seu feedback</TextName>
          <InputPost placeholder="Escreva um comentário..."></InputPost>
          <PostButton>Publicar</PostButton>
        </Feedback>
      </ContainerMain>
    </>
  );
}
