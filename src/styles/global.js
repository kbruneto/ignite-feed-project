import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
    *{
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: ${theme.colors.black};
    }

    h1{
        color: ${theme.colors.text};
    }

    body, input, button, select{
        font: 1rem 'Roboto', sans-serif;
    }

    h1, h2, p, span, strong, button, label, input {
        line-height: 100%,
    }

    #root{
        max-width: 100%;
        margin: 0 auto;
    }
    
    button {
        cursor: pointer;
    }
`;

export const ContainerPosts = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;
