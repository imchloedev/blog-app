import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../common/Button";

const AuthFormWrapper = styled.div`
  h3 {
    margin: 0;
    color: #333;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #666;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: #111;
    border-bottom: 1px solid #111;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #666;
    text-decoration: underline;
    &:hover {
      color: #111;
    }
  }
`;

export default function AuthForm() {
  const router = useRouter();

  return (
    <AuthFormWrapper>
      <h3>
        {
          router.pathname === '/login' ? 'Log in' : 'Join us'
        }
      </h3>
      <form>
        <StyledInput autoComplete="username" name="username" placeholder="ID" />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="Password"
          type="password"
        />
        {
          router.pathname === '/register' && (
            <StyledInput 
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="Confirm password"
            />
          )
        }
        <Button
          style={{
            marginTop: "1rem",
          }}
          cyan
          fullWidth
        >
          {
            router.pathname === '/login' ? 'Log in' : 'Sign in'
          }
        </Button>
      </form>
      <Footer>
        {
          router.pathname === '/login' ? (
            <Link href='/register'><a>Join us</a></Link>
          ) : (
            <Link href='/login'><a>Log in</a></Link>
          )
        }
      </Footer>
    </AuthFormWrapper>
  );
}

//<Button cyan fullWidth> ==> <Button cyan={true} fullWidth={true}> 와 같은 의미이다.
