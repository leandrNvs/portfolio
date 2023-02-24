import GlobalStyle, { Wrapper } from "./styles/global";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Home />
        {/* <About /> */}
        <Skills />
        <Projects />
      </Wrapper>
      <Footer />
    </>
  );
}
