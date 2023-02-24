import { useEffect, useState } from "react";
import * as H from "./header.styles";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const handleActiveLink = (x: string) => {
    setActiveLink(x);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const winPos = window.scrollY;

    for (let item of sections) {
      const section = item as HTMLElement;
      const secInitial = section.offsetTop - 140;
      const secFinal = secInitial + section.scrollHeight;

      if (winPos >= secInitial && winPos < secFinal) {
        handleActiveLink(item.id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <H.Header>
      <H.Logo>Leandro Neves</H.Logo>
      <H.Navbar>
        <H.Link active={activeLink === "home"} href="#home">
          Início
        </H.Link>
        {/* <H.Link active={activeLink === "about"} href="#about">
          Sobre mim
        </H.Link> */}
        <H.Link active={activeLink === "skills"} href="#skills">
          Habilidades
        </H.Link>
        <H.Link active={activeLink === "projects"} href="#projects">
          Projetos
        </H.Link>
      </H.Navbar>
    </H.Header>
  );
}
