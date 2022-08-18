import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
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

button,
input,
select {
  font-family: "Lato", sans-serif;
}
`;

export default GlobalStyle;
