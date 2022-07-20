import styled, { css }from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  cursor: pointer;

  background-color: #222;
  &:hover {
    background-color: #666;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background-color: #1970ff;
      &:hover {
        background-color: #1862dc;
      }
    `}
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}
