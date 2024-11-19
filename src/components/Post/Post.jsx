import {
  DescriptionPeople,
  StyledTextPost,
  TextName,
  TextSpan,
} from "../../styles/texts";
import { Coments } from "../Commentaries/Coments";
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
  CommentSpace,
} from "./post.styles";

export function Post({ comments }) {
  console.log(comments);

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
              <TextName>Lalala</TextName>
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

        <CommentSpace>
          {comments?.map((commentsParams, Key) => (
            <Coments
              Key={Key}
              photo={commentsParams.photo}
              name={commentsParams.name}
              timing={commentsParams.timing}
              text={commentsParams.text}
            />
          ))}
        </CommentSpace>
      </ContainerMain>
    </>
  );
}
