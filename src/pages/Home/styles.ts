import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section=styled.section`
background-color: ${colors.black};
  display: flex;
  max-width: 1090px;
  margin: 100px auto;
  justify-content: center;
  gap: 10rem;
 
  img {
    width: 35%;
  }
`