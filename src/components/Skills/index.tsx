import * as S from "./skills.styles";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiMaterialui,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    title: "HTML",
    icon: <SiHtml5 />,
    color: "#DD4B25",
  },
  {
    title: "CSS",
    icon: <SiCss3 />,
    color: "#254BDD",
  },
  {
    title: "Bootstrap",
    icon: <SiBootstrap />,
    color: "#673F98",
  },
  {
    title: "Sass",
    icon: <SiSass />,
    color: "#C76494",
  },
  {
    title: "Javascript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
  },
  {
    title: "Typescript",
    icon: <SiTypescript />,
    color: "#007ACC",
  },
  {
    title: "ReactJs",
    icon: <SiReact />,
    color: "#57D2F3",
  },
  {
    title: "Redux",
    icon: <SiRedux />,
    color: "#7045B5",
  },
  {
    title: "Material Ui",
    icon: <SiMaterialui />,
    color: "#007FFF",
  },
  {
    title: "Styled components",
    icon: <SiStyledcomponents />,
    color: "#C76494",
  },
  {
    title: "Git",
    icon: <SiGit />,
    color: "#E94E31",
  },
  {
    title: "Github",
    icon: <SiGithub />,
    color: "#000",
  },
];

export default function Skills() {
  const el = skills.map((item) => (
    <S.Card key={item.title}>
      <S.CardIcon color={item.color}>{item.icon}</S.CardIcon>
      <S.CardTitle>{item.title}</S.CardTitle>
    </S.Card>
  ));

  return (
    <S.Wrapper id="skills">
      <S.Title>Meus conhecimentos</S.Title>
      <S.Grid>{el}</S.Grid>
    </S.Wrapper>
  );
}
