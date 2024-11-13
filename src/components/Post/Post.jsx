import {
  ContainerMain,
  Person,
  Publication,
  Line,
  Feedback,
  PostImage,
} from "./post.styles";

export function Post() {
  return (
    <>
      <ContainerMain>
        <Person>
          <PostImage
            src="https://i.pravatar.cc/1000?img=35"
            alt="Imagem de perfil de Jane Cooper"
          />
          <p>Jane Cooper</p>
          <p>Dev Front-End</p>s<p>Publicado há 1h</p>
        </Person>

        <Publication></Publication>
        <Line></Line>
        <Feedback></Feedback>
      </ContainerMain>
    </>
  );
}
