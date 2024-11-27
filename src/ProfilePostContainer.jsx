import styled from "styled-components";

export const ProfilePostContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin: 32px auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;
