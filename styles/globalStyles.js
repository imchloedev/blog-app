import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyles = css`
  ${reset};

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button, input, select {
    font-family: "Lato", sans-serif;
  }


`;

const GlobalStyle = createGlobalStyle`
${globalStyles};
`;

export default GlobalStyle;
