import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
    }

    body{
        background-color: #E5E5E5;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    img{
        max-width: 100%;
        display: block;
    }

    button{
        border: none;
        cursor: pointer;
    }
`