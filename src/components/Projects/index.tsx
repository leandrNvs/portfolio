import { useEffect, useState } from "react";
import * as P from "./projects.styles";
import data from "../../data/data";

import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
type PaginateProps = typeof data;

function paginate(arr: PaginateProps) {
  const copy = [...arr];
  const newArr: PaginateProps[] = [];

  while (copy.length > 0) {
    let item = copy.splice(0, 8);
    newArr.push(item);
  }

  return newArr;
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const list = paginate(data);

  const handleScroll = () => {
    const value = (document.querySelector("#projects") as HTMLElement)
      .offsetTop;
    window.scrollTo(0, value);
  };

  const handleClick = (x: number) => {
    setPage(x);
    handleScroll();
  };

  const paginageButtons = [];

  for (let i = 0; i < list.length; i++) {
    paginageButtons.push(
      <P.PaginateButton
        key={i}
        onClick={() => handleClick(i)}
        active={page === i}
      >
        {i + 1}
      </P.PaginateButton>
    );
  }

  const projects = list[page].map((item, index) => (
    <P.ProjectCard key={index}>
      <P.CardImage src={item.thumb} alt="" />
      <P.CardTechnology>
        Tecnologias: {item.technologies.join(", ")}
      </P.CardTechnology>
      <P.CardLinks>
        <P.CardLink href={item.code} target="_blank">
          <SiGithub />
        </P.CardLink>
        <P.CardLink href={item.live} target="_blank">
          <BiLinkExternal />
        </P.CardLink>
      </P.CardLinks>
    </P.ProjectCard>
  ));

  return (
    <P.Wrapper id="projects">
      <P.Container>
        <P.Title>Meus Projetos</P.Title>
        <P.Projects>{projects}</P.Projects>
        <P.Paginate>{paginageButtons}</P.Paginate>
      </P.Container>
    </P.Wrapper>
  );
}
