import PropTypes from "prop-types";
import { useState } from "react";
import {
  DescriptionPeople,
  StyledTextPost,
  TextName,
  TextSpan,
} from "../../styles/texts";
import { Coments } from "../Commentaries";
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
} from "./styles";

export function Post({ post }) {
  const [comment, setComment] = useState("");

  const [postComments, setPostComments] = useState(post.comments);

  const publicComment = () => {
    const newComment = {
      id: crypto.randomUUID(),
      photo: "https://i.pravatar.cc/1000?img=55",
      name: "Testando Muito",
      timing: "4",
      text: comment,
    };
    setPostComments((curr) => [...curr, newComment]);
    setComment("");
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const deleteComment = (id) => {
    var delIndex = postComments.findIndex((comment) => comment.id === id);

    setPostComments((curr) => {
      const delArray = [...curr];

      delArray.splice(delIndex, 1);

      return delArray;
    });
  };

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
          <InputPost
            placeholder="Escreva um comentário..."
            value={comment}
            onChange={handleInputChange}
          ></InputPost>
          {comment !== "" && (
            <PostButton onClick={publicComment}>Publicar</PostButton>
          )}
        </Feedback>

        <CommentSpace>
          {postComments?.map((commentsParams) => (
            <Coments
              key={commentsParams.id}
              id={commentsParams.id}
              photo={commentsParams.photo}
              name={commentsParams.name}
              timing={commentsParams.timing}
              text={commentsParams.text}
              deleteComment={deleteComment}
            />
          ))}
        </CommentSpace>
      </ContainerMain>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.any,
};
