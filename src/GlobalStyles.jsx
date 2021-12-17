import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: #0c0c0c;
        color: #ffffff;
    }

    img {
        max-width: 100%;
    }
`;
