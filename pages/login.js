import Head from "next/head";
import AuthForm from "../src/components/auth/AuthForm";
import AuthTemplate from "../src/components/auth/AuthTemplate";

export default function login() {
  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    </>
  );
}
