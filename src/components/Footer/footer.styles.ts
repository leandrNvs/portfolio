import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 8rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem 0;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Link = styled.a`
  color: #111;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
