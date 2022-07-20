import Link from "next/link";
import styled from "styled-components";

const AuthTemplateWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
  overflow: scroll;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  height: auto;
  background-color: white;
  border-radius: 2px;
  margin: 0 auto;
`;

export default function AuthTemplate({ children }) {
  return (
    <AuthTemplateWrapper>
      <WhiteBox>
        <div className="logo-area">
          <Link href="/">
            <a>BLOG</a>
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateWrapper>
  );
}
