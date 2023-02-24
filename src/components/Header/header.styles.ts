import styled from "styled-components";

type LinkProps = {
  active: boolean;
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.header.mobile}px;
  width: 95%;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    width: 81%;
    height: ${({ theme }) => theme.header.desktop}px;
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Navbar = styled.nav``;

export const Link = styled.a<LinkProps>`
  color: #fff;
  padding: 0 0.5rem;
  position: relative;

  @media (min-width: 900px) {
    padding: 0 1.5rem;
  }

  &::before {
    content: "";
    height: 5px;
    width: 5px;
    border-radius: 50%;
    display: block;
    background-color: ${({ active, theme }) =>
      active ? theme.colors.secondary : "transparent"};
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
