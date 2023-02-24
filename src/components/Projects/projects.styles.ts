import styled, { css } from "styled-components";

type ButtonPageProps = {
  active: boolean;
};

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  height: 90%;
  width: 100%;
  border-radius: 1rem;
`;

export const Title = styled.h2`
  /* color: ${({ theme }) => theme.colors.secondary}; */
  color: #fff;
  text-align: center;
  margin: 2rem;
  font-size: 2rem;
`;

export const Projects = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectCard = styled.div`
  background-color: #222;
  overflow: hidden;
  padding: 1.5rem;

  &:hover img {
    filter: grayscale(0);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  display: block;
  object-fit: contain;
  filter: grayscale(90%);
`;

export const CardTechnology = styled.div`
  margin-top: 2rem;
  color: #888;
`;

export const CardLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

export const CardLink = styled.a`
  font-size: 2rem;
  display: flex;
  svg {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Paginate = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const PaginateButton = styled.button<ButtonPageProps>`
  height: 30px;
  width: 30px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.secondary : "#222"};
  color: ${({ active }) => (active ? "#000" : "#fff")};
  font-size: 1.1rem;
`;
