import Link from "next/link";
import styled from "styled-components";
import Button from "./common/Button";

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid gray;

  .logoIcon {
    a {
      display: flex;
      align-items: center;
    }
    img {
      display: block;
      width: 46px;
      margin-right: 10px;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="logoIcon">
        <Link href="/">
          <a>
            <img src="/blogger.png" alt="" />
            Blog Playground
          </a>
        </Link>
      </div>

      <Link href="/login">
        <a>
          <Button style={{
            backgroundColor: "#eee",
            color: "#111"
          }}>로그인</Button>
        </a>
      </Link>
    </StyledHeader>
  );
}
