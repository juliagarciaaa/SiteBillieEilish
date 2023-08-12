import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Itim', sans-serif;
    font-weight: 500;
  }
`
export const colors = {
    primary: "#FFC7C9",
    secundary: "#F5E8D3",
    third: "#DD6E7E",
    black: "#000",
    white:"#FFF"
}

export const Main = styled.main`
  min-height: calc(100vh - 9rem);
`