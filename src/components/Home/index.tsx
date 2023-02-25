import { SiGithub, SiLinkedin } from "react-icons/si";
import * as H from "./home.styles";

export default function Home() {
  return (
    <H.Wrapper id="home">
      <H.Title>
        Desenvolvedor <br />
        Front-end
      </H.Title>
      <H.Text>
        Formando em <strong>Análise e Desenvolvimento de Sistemas</strong> e
        estudante no desenvolvimento web. Atualmente, atuando com{" "}
        <strong>javascript</strong> utilizando a biblioteca{" "}
        <strong>ReactJs</strong>. Planejo retomar meus estudos sobre{" "}
        <strong>PHP</strong> e <strong>Mysql</strong>. Também possuo interesse
        em <strong>Ruby.</strong>
      </H.Text>
      <H.LinkGroup>
        <H.Link href="https://github.com/leandrNvs" target="_blank" primary>
          <SiGithub />
          Github
        </H.Link>
        <H.Link href="https://www.linkedin.com/in/leandrnvs/" target="_blank">
          <SiLinkedin />
          Linkedin
        </H.Link>
      </H.LinkGroup>
    </H.Wrapper>
  );
}
