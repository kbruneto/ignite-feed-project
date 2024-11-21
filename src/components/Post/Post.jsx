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

export function Post({ post }) {
  return (
    <>
      <ContainerMain>
        <Person>
          <ContainerLeft>
            <PostImage src={post.photo} alt="Imagem de perfil de Jane Cooper" />
            <Specs>
              <TextName>{post.name}</TextName>
              <DescriptionPeople>{post.description}</DescriptionPeople>
            </Specs>
          </ContainerLeft>
          <ContainerRight>
            <DescriptionPeople>Publicado há {post.timing}h</DescriptionPeople>
          </ContainerRight>
        </Person>

        <Publication>
          <TextPost>
            <StyledTextPost> {post.apresentation} </StyledTextPost>
            <StyledTextPost>{post.text}</StyledTextPost>
            <StyledTextPost>
              {post.link}
              <TextSpan>{post.linkSpan}</TextSpan>
            </StyledTextPost>
            <TextSpan> {post.hashtags} </TextSpan>
          </TextPost>
        </Publication>

        <Line></Line>

        <Feedback>
          <TextName>Deixe seu feedback</TextName>
          <InputPost placeholder="Escreva um comentário..."></InputPost>
          <PostButton>Publicar</PostButton>
        </Feedback>

        <CommentSpace>
          {post.comments?.map((commentsParams) => (
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
