import styled from "styled-components";
import { theme } from "../../styles/theme";
import { PersonImage } from "../../styles/PersonImage";
import {
  DescriptionPeople,
  StyledTextPost,
  TextName,
} from "../../styles/texts";

export const Commentaries = styled.div`
  width: 100%;
  min-height: 156px;
  display: flex;
`;

export const CommentariesImg = styled(PersonImage)`
  border: none;
`;

export const ComContLeft = styled.div`
  width: 50px;
  height: 100%;
`;

export const ComContRight = styled.div`
  width: 686px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
`;

export const DivComment = styled.div`
  min-height: 120px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 0 16px 16px;
  background-color: ${theme.colors.commentBackground};
  border-radius: 9px;
`;

export const Likes = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  gap: 10px;
  margin-left: 16px;
`;

export const ComTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 42px;
`;

export const ComTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24px);

  p {
    margin: 0;
    font-size: 14px;
    color: ${theme.colors.textPrimary};
  }
`;

export const ComTopRight = styled.div`
  width: 24px;
  justify-content: top;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const ComBottom = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  word-break: break-word;
  overflow-wrap: break-word;
  margin-top: 8px;
`;

export const NameComents = styled(TextName)`
  font-size: 16px !important;

  span {
    color: ${theme.colors.darkText};
    font-size: 14px !important;
  }
`;

export const DescriptionComents = styled(DescriptionPeople)`
  font-size: 12px !important;
  line-height: 19.2px;
`;

export const StyledTextComents = styled(StyledTextPost)`
  font-size: 14px !important;
  line-height: 22.4px !important;
`;

export const LikeText = styled(DescriptionPeople)`
  font-weight: 700 !important;
`;
