import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "nunito-sans";
        src=url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
    }  

    body {
        margin: 0;
        padding: 0;
    }

    p, a, label {
        font-family: "nunito-sans", sans-serif;
        font-size: 14px;
    }
`;

export default GlobalStyles;