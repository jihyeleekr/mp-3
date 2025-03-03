import { createGlobalStyle } from "styled-components"; //Source: https://styled-components.com/docs/api

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        color: #1c1c1c;
        line-height: 1.6;
    }
`;

export default GlobalStyles;
