import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`

  /* Cabeçalho */
  background-color: ${colors.secundary};
  border-bottom: none;
  display: flex;
  height: 4rem;
  picture {
    margin-left: 0%.5;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
    li:hover {
      background-color: ${colors.third};
    }
  }

`