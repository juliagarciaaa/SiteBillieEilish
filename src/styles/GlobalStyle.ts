import styled, { createGlobalStyle } from "styled-components"

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
    primary: "#F38686",
    secundary: "#F5C89B",
    secundarylight: "#F5E8D3",
    third:  "#FC8A3B",
    black: "#000",
    white:"#FFF"
}