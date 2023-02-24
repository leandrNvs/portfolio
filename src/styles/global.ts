import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const Wrapper = styled.main`
  width: 80%;
  margin: 0 auto;

  section {
    min-height: 100vh;
    padding-top: ${({ theme }) => theme.header.mobile}px;

    @media (min-width: 800px) {
      padding-top: ${({ theme }) => theme.header.desktop}px;
    }
  }
`;

export default GlobalStyle;
