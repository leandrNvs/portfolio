import styled, { css, ThemeContext } from "styled-components";

type LinkProps = {
  primary?: boolean;
};

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  line-height: 1.3;

  @media (min-width: 1000px) {
    br {
      display: none;
    }

    font-size: 3.5rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 2rem;
  line-height: 1.6;
  max-width: 550px;

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: 1000px) {
    font-size: 1.1rem;
  }
`;

export const LinkGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export const Link = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 45px;
  width: 140px;
  text-align: center;
  line-height: 39px;
  text-decoration: none;
  color: ${({ primary, theme }) => (primary ? theme.colors.secondary : "#fff")};
  border: 1px solid
    ${({ primary, theme }) => (primary ? theme.colors.secondary : "#fff")};
  border-radius: 0.5rem;

  svg {
    transition: 0.5s;
    transform: rotate(0deg);
  }

  &:hover {
    svg {
      transform: rotate(360deg);
    }
  }
`;
