import styled from "styled-components";

const StyledFooter = styled.div`
height: 100px;
  background-color: white;
  padding: 40px 30px;
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      All rights reserved.
    </StyledFooter>
  );
}
