import styled from "styled-components";

type IconProps = {
  color: string;
};

export const Wrapper = styled.section`
  padding-top: 8rem;
  min-height: 100vh;

  @media (min-width: 800px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.7rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  border: 2px solid orange;
  background-color: #222;
  height: 150px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  color: #fff;
  text-align: center;
`;

export const CardIcon = styled.div<IconProps>`
  color: ${({ color }) => color};
  font-size: 4rem;
  display: flex;
`;
