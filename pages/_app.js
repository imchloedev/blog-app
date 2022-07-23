import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import GlobalStyle from "../styles/globalStyles";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
