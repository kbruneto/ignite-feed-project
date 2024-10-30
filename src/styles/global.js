import { createGlobalStyle } from "styled-components";
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
`;
