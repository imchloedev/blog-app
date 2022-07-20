import AuthForm from "../src/components/auth/AuthForm";
import AuthTemplate from "../src/components/auth/AuthTemplate";

export default function register() {
  return (
    <>
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    </>
  );
}
