import {
  Commentaries,
  CommentariesImg,
  ComContLeft,
  ComContRight,
  Likes,
  DivComment,
  ComTop,
  ComTopLeft,
  ComTopRight,
  ComBottom,
  NameComents,
  DescriptionComents,
  StyledTextComents,
  LikeText,
} from "./styles";

import Like from "../../assets/Like.svg";
import Lixeira from "../../assets/Lixeira.svg";

import PropTypes from "prop-types";

export function Coments({ photo, name, timing, text, id, deleteComment }) {
  return (
    <>
      <Commentaries>
        <ComContLeft>
          <CommentariesImg src={photo} alt={`Imagem de ${name}`} />
        </ComContLeft>

        <ComContRight>
          <DivComment>
            <ComTop>
              <ComTopLeft>
                <NameComents>{name}</NameComents>
                <DescriptionComents> Cerca de {timing}h </DescriptionComents>
              </ComTopLeft>
              <ComTopRight>
                <img
                  src={Lixeira}
                  alt="Excluir comentário"
                  onClick={() => deleteComment(id)}
                />
              </ComTopRight>
            </ComTop>
            <ComBottom>
              <StyledTextComents> {text} </StyledTextComents>
            </ComBottom>
          </DivComment>
          <Likes>
            <img src={Like} alt="Curtir comentário" />
            <LikeText>Aplaudir • 03</LikeText>
          </Likes>
        </ComContRight>
      </Commentaries>
    </>
  );
}

Coments.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  timing: PropTypes.string,
  text: PropTypes.string,
  deleteComment: PropTypes.func,
  id: PropTypes.string,
};
