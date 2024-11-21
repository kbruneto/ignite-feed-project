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

export function Post({
  comments: commentsIds,
  photo,
  name,
  description,
  timing,
  apresentation,
  text,
  link,
  linkSpan,
  hashtags,
}) {
  return (
    <>
      <ContainerMain>
        <Person>
          <ContainerLeft>
            <PostImage src={photo} alt="Imagem de perfil de Jane Cooper" />
            <Specs>
              <TextName>{name}</TextName>
              <DescriptionPeople>{description}</DescriptionPeople>
            </Specs>
          </ContainerLeft>
          <ContainerRight>
            <DescriptionPeople>Publicado há {timing}h</DescriptionPeople>
          </ContainerRight>
        </Person>

        <Publication>
          <TextPost>
            <StyledTextPost> {apresentation} </StyledTextPost>
            <StyledTextPost>{text}</StyledTextPost>
            <StyledTextPost>
              {link}
              <TextSpan>{linkSpan}</TextSpan>
            </StyledTextPost>
            <TextSpan> {hashtags} </TextSpan>
          </TextPost>
        </Publication>

        <Line></Line>

        <Feedback>
          <TextName>Deixe seu feedback</TextName>
          <InputPost placeholder="Escreva um comentário..."></InputPost>
          <PostButton>Publicar</PostButton>
        </Feedback>

        <CommentSpace>
          {commentsIds?.map((commentsParams) => (
            <Coments
              key={commentsParams.id}
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
